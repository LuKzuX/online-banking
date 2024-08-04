import axios from "axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/authContext";

export const Chart = () => {
  const { token } = useAuthContext();
  const [data, setData] = useState("");
  const [chartYear, setChartYear] = useState("2024");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("bank/chart/" + chartYear, {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [token, chartYear]);

  data && console.log(data);

  const x1 = ["0%", "0%"];
  const x2 = ["100%", "0%"];
  const y1 = ["100%", "100%"];
  const y2 = ["100%", "0%"];
  return (
    <div className="">
      <button onClick={() => setChartYear("2024")}>2024</button>
      <button onClick={() => setChartYear("2023")}>2023</button>
      <svg width={"auto"} height={"364px"}>
        <text x="5" y="15" fill="red">
          I love SVG!
        </text>
        <line
          x1={x1[0]}
          x2={x2[0]}
          y1={y1[0]}
          y2={y2[0]}
          stroke="black"
          stroke-width="4"
        />

        <line
          x1={x1[1]}
          x2={x2[1]}
          y1={y1[1]}
          y2={y2[1]}
          stroke="black"
          stroke-width="4"
        />
      </svg>
    </div>
  );
};
