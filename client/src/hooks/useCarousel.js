import { useEffect, useState } from "react";
import mainImage from "../images/main-image.avif";
import mainImage2 from "../images/main-image.png";
import mainImage3 from "../images/main-image.jpg";
import mainImage4 from "../images/main-image.webp";

export const useCarousel = () => {
  const arr = [mainImage, mainImage2, mainImage3, mainImage4];
  const [currentPosition, setCurrentPosition] = useState(1);
  const textArr = ["Get started", "Know more", "Explore", "Lorem Ipsum"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prevPosition) => (prevPosition + 1) % arr.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [arr.length]);

  return (
    <div className="flex h-screen relative ">
      {arr.map((image, index) => (
        <div key={index} className="">
          <div
            className={`image-transition absolute right-0 ${
              currentPosition === index ? "w-screen h-1/2" : "w-0 left-0"
            } h-1/2`}
          >
            <img
              src={image}
              alt={index}
              className="w-full h-full object-cover brightness-50"
            ></img>
            <button
              className={`transition transform duration-500 absolute left-6 top-[70%] px-6 py-3 text-white bg-transparent border-2 border-white rounded-xl font-bold ${
                currentPosition === index
                  ? "translate-x-0"
                  : "translate-x-[-50px] opacity-0"
              }`}
            >
              {textArr[index]}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
