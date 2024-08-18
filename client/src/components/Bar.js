import { useChartProvider } from "../context/chartContext";

export const Bar = ({ x, y, height, width, arr1, arr2, fonsize }) => {

  return (
    <>
      <text
        x={height < 1000 ? x + 10 : x - 10}
        y={y - 10}
        fill="black"
        fontSize={fonsize}
      >
        {height}
      </text>
      <g>
        <rect
          x={x}
          y={y}
          height={height}
          width={width}
          fill="rgb(255, 98, 0, 1)"
        />
      </g>
    </>
  );
};
