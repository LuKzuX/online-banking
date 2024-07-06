import { useEffect, useState } from "react";
import mainImage from "../images/main-image.avif";
import mainImage2 from "../images/main-image.png";
import mainImage3 from "../images/main-image.jpg";
import mainImage4 from "../images/main-image.webp";

export const useCarousel = () => {
  const [arr, setArr] = useState([
    mainImage4,
    mainImage,
    mainImage2,
    mainImage3,
    mainImage4,
  ]);
  const [currentPosition, setCurrentPosition] = useState(4);
  const textArr = [
    { text: "Get started", link: "" },
    { text: "Know more", link: "" },
    { text: "Explore", link: "" },
    { text: "sdsdsd", link: "" },
  ];
  const [intervalTime, setIntervalTime] = useState(1000);

  useEffect(() => {
    if (currentPosition === 0) {
      setIntervalTime(0);
    } else {
      setIntervalTime(1000);
    }
  }, [currentPosition]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prevPosition) => (prevPosition + 1) % arr.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [arr.length, intervalTime]);

  console.log(currentPosition);
  return (
    <div className="flex h-screen overflow-hidden text-white">
      {arr.map((image, index) => (
        <div
          key={index}
          className={`flex overflow-hidden flex-shrink-0  ${
            currentPosition === 0 ? "" : "transition-transform duration-500"
          }`}
          style={{
            transform:
              currentPosition === arr.length
                ? "translateX(0%) "
                : `translateX(-${currentPosition * 100}%)`,
          }}
        >
          <div className={`relative w-screen h-1/2 `}>
            <img
              src={image}
              className="h-full w-full object-cover brightness-50"
            />
            <button className="absolute top-[75%] right-[60%] border-2 border-white rounded-xl py-3 px-6 font-bold">
              {index === 0 || index === arr.length - 1
                ? textArr[0].text
                : textArr[index].text}
            </button>
          </div>
        </div>
      ))}
    </div>

    // <div className="flex h-screen relative ">
    //   {arr.map((image, index) => (
    //     <div key={index} className="">
    //       <div
    //         className={`image-transition absolute right-0 ${
    //           currentPosition === index ? "w-screen h-1/2" : "w-0 left-0"
    //         } h-1/2`}
    //       >
    //         <img
    //           src={image}
    //           alt={index}
    //           className="w-full h-full object-cover brightness-50"
    //         ></img>
    //         <button
    //           className={`transition transform duration-500 absolute left-6 top-[70%] px-6 py-3 text-white bg-transparent border-2 border-white rounded-xl font-bold ${
    //             currentPosition === index
    //               ? "translate-x-0"
    //               : "translate-x-[-50px] opacity-0"
    //           }`}
    //         >
    //           {textArr[index]}
    //         </button>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};
