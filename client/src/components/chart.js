import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/authContext";
import { Bar } from "./Bar";

export const Chart = () => {
  const { token } = useAuthContext();
  const [data, setData] = useState("");
  const [chartYear, setChartYear] = useState("2024");
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

  const barWidth = 90;
  const barMargin = 50;
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const [greatestValue, setGreatestValue] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("bank/chart/" + chartYear, {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        const fetchedData = res.data;
        setData(res.data);
        const maxValue = Math.max(...fetchedData.map((el) => el.value));
        const chartHeight = maxValue + 100;
        setChartHeight(chartHeight);
        setChartWidth(fetchedData.length * (barWidth + barMargin));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token, chartYear]);

  return (
    <div className="relative">
      <button onClick={() => setChartYear("2024")}>2024</button>
      <button onClick={() => setChartYear("2023")}>2023</button>
      <div className=" w-full overflow-x-auto">
        <svg
          className="bg-neutral-200"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          width={chartWidth}
          height={"400"}
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
                />
              );
            })}
        </svg>
      </div>
      {data &&
        data.map((el, index) => (
          <p
            className="absolute"
            style={{ left: `${index * (barWidth + barMargin)}px`}}
          >
            {monthNames[el.month]}
          </p>
        ))}
    </div>
  );
};
