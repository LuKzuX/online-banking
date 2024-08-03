export const Chart = () => {
  const x1 = ["0%", "0%"];
  const x2 = ["100%", "0%"];
  const y1 = ["100%", "100%"];
  const y2 = ["100%", "0%"];
  return (
    <div className="">
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
