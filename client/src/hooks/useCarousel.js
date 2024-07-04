import { useEffect, useState } from "react";
import mainImage from "../images/main-image.avif";
import mainImage2 from "../images/main-image.png";
import mainImage3 from "../images/main-image.jpg";
import mainImage4 from "../images/main-image.webp";

export const useCarousel = () => {
  const arr = [mainImage, mainImage2, mainImage3, mainImage4];
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((prevPosition) => (prevPosition + 1) % arr.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen relative">
      {arr.map((image, index) => (
        <div key={index}>
          <div
            className={`image-transition absolute right-0 ${
              currentPosition === index ? "w-screen h-1/2" : "w-0 left-0"
            } h-1/2`}
          >
            <img
              src={image}
              alt={index}
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>
      ))}
      <p>fyrguhij</p>
    </div>
  );
};
