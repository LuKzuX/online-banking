export const Bar = ({ x, y, height, width, arr1, arr2 }) => {
  return (
    <>
      <text
        x={height < 1000 ? x + 5 : x - 10}
        y={y - 10}
        fill="black"
        fontSize={"60px"}
      >
        {height}
      </text>
      <g>
        <rect x={x} y={y} height={height} width={width} fill="rgb(255, 98, 0, 1)" />
        <text
          x={x + 15}
          y={y + 70}
          fontSize={50}
          fill="white"
          textAnchor="central"
        >
          {arr1[arr2]}
        </text>
      </g>
    </>
  );
};
