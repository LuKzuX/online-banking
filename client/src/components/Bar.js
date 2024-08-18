export const Bar = ({ x, y, height, width, arr1, arr2, fontSize }) => {
  return (
    <>
      <g textAnchor="middle">
        <text x={x + 140} y={y - 160} fontSize={fontSize} fill="black">
          {arr1[arr2]}
        </text>
        <text
          x={x + 140}
          y={y - 10}
          fill="black"
          fontSize={fontSize}
        >
          {height}
        </text>
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
