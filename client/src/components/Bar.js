export const Bar = ({x, y, height, width}) => {
    return ( 
        <>
        <text x={x} y={y - 10} fill="black">{height}</text>
        <rect x={x} y={y} height={height} width={width} fill="teal"></rect>
        </>
     );
}



