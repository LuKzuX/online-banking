export const Bar = ({x, y, height, width}) => {
    return ( 
        <>
        <text x={x} y={y} font-size="2em" fill="black" textAnchor="">{height}</text>
        <rect x={x} y={y} height={height} width={width} fill="teal"></rect>
        </>
     );
}



