import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { ChartContextProvider, useChartProvider } from "../context/chartContext";
import { Bar } from "./Bar";

export const Chart = () => {
  const { token } = useAuthContext();
  const {data, setData} = useChartProvider()
  const [chartYear, setChartYear] = useState(2024);
  const [chartYearArray, setChartYearArray] = useState("");
  const monthNames = [
    "",
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  let barWidth = 120;
  const barMargin = 50;
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const [yearMenu, setYearMenu] = useState(false);
  if (chartHeight) {
    barWidth += (chartHeight / 100) + 120
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("bank/chart/" + chartYear, {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        const fetchedData = res.data.monthlyTotalsArray;
        setData(res.data.monthlyTotalsArray);
        setChartYearArray(res.data.allYearsArray);
        const maxValue = Math.max(...fetchedData.map((el) => el.value));
        const chartHeight = maxValue + 350;
        setChartHeight(chartHeight);
        setChartWidth(fetchedData.length * (barWidth + barMargin));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token, chartYear]);

  const toggleYearMenu = () => {
    if (!yearMenu) {
      setYearMenu(true);
    } else {
      setYearMenu(false);
    }
  };

  return (
    <div className="relative flex flex-col text-white">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-black font-bold text-xl">Montly Expenses</p>
          <div className="w-full h-[2px] main-color mt-1"></div>
        </div>
        <div className="relative ">
          <button
            className="main-color py-2 px-6 text-xl"
            onClick={toggleYearMenu}
          >
            Select year:
          </button>
          {yearMenu && (
            <div
              className="absolute flex flex-col items-center justify-center gap-4 left-[0%] shadow-xl
           main-color w-full p-5 text-white"
            >
              {chartYearArray.map((el, index) => (
                <div key={index} className="">
                  <button
                    className="main-color px-4 py-1 rounded-xl border-2"
                    onClick={() => {
                      setChartYear(el.year);
                      toggleYearMenu();
                    }}
                  >
                    {el.year}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full overflow-x-auto mt-5">
        <svg
          className="bg-white min-w-[100%] border-2 rounded-xl"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          width={chartWidth}
          height={'500px'}
          preserveAspectRatio="xMidYMax meet"
        >
          {data &&
            data.map((el, index) => {
              return (
                <Bar
                  key={el.month}
                  x={index * (barWidth + barMargin)}
                  y={chartHeight - el.value}
                  width={barWidth}
                  height={el.value}
                  arr1={monthNames}
                  arr2={el.month}
                  fontSize={120}
                />
              );
            })}
        </svg>
      </div>
    </div>
  );
};
