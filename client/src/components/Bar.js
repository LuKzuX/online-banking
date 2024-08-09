export const Bar = ({x, y, height, width}) => {
    return ( 
        <>
        <text x={x - 10} y={y - 10} fill="black">{height}</text>
        <rect x={x} y={y} height={height} width={width} fill="teal"></rect>
        </>
     );
}



