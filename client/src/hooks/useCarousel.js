import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import mainImage from "../images/main-image.avif";
import mainImage2 from "../images/main-image.png";
import mainImage3 from "../images/main-image.jpg";
import mainImage4 from "../images/main-image.webp";

export const useCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [intervalTime, setIntervalTime] = useState(1000);
  const [arr, setArr] = useState([
    mainImage,
    mainImage2,
    mainImage3,
    mainImage4,
  ]);

  const textArr = [
    {
      bText: "Get started",
      link: "",
      title: "Title One",
      text: `Start today with the best`,
      textTwo: `online bank`,
    },
    {
      bText: "Know more",
      link: "",
      title: "Title Two",
      text: "Explore about our solutions ",
      textTwo: `for your money `,
    },
    {
      bText: "Explore",
      link: "",
      title: "Title Three",
      text: "We have all the functionalities",
      textTwo: `avaliable for you`,
    },
    {
      bText: "sdsdsd",
      link: "",
      title: "Title Four",
      text: "Lorem ipsum dolor sit ",
      textTwo: `consectetur adipiscing elit `,
    },
  ];

  const advance = () => {
    setCurrentPosition((prev) => (prev + 1) % arr.length);
  };

  const retreat = () => {
    setCurrentPosition((prev) =>
      prev == 0 ? (prev = arr.length - 1) : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      advance();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-screen w-full overflow-hidden text-white text-xl">
      {arr.map((image, index) => (
        <div
          key={index}
          className={`relative flex-shrink-0 transition-transform duration-500`}
          style={{
            transform: `translateX(-${currentPosition * 100}%) `,
          }}
        >
          <img
            src={image}
            className="h-3/5 w-screen object-cover brightness-50"
          />
          <div className="absolute flex flex-col items-start gap-16 top-[15%] px-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-semibold">{textArr[index].title}</h1>
              <div className="flex-flex-col text-xl">
                <h2>{textArr[index].text}</h2>
                <h1>{textArr[index].textTwo}</h1>
              </div>
            </div>
            <button className="border py-3 px-6 rounded-xl">
              {textArr[index].bText}
            </button>
          </div>
        </div>
      ))}
      <div className="absolute flex gap-2 justify-center items-center w-screen bottom-[42%] text-white">
        <button onClick={retreat}>
          <MdOutlineKeyboardArrowLeft size={40} className="rounded-3xl" />
        </button>
        <div className="flex">
          <p
            onClick={() => setCurrentPosition(0)}
            className={`opacity-50 ${currentPosition == 0 && "opacity-100"}`}
          >
            <LuDot size={40} />
          </p>
          <p
            onClick={() => setCurrentPosition(1)}
            className={`opacity-50 ${currentPosition == 1 && "opacity-100"}`}
          >
            <LuDot size={40} />
          </p>
          <p
            onClick={() => setCurrentPosition(2)}
            className={`opacity-50 ${currentPosition == 2 && "opacity-100"}`}
          >
            <LuDot size={40} />
          </p>
          <p
            onClick={() => setCurrentPosition(3)}
            className={`opacity-50 ${currentPosition == 3 && "opacity-100"}`}
          >
            <LuDot size={40} />
          </p>
        </div>
        <button onClick={advance}>
          <MdOutlineKeyboardArrowRight size={40} className="rounded-3xl" />
        </button>
      </div>
    </div>
  );

  // const advance = () => {
  //   setCurrentPosition((prev) => prev += 1)
  //   if (currentPosition >= arr.length - 1) {
  //     setCurrentPosition(0)
  //   }
  // }

  // const retreat = () => {
  //   setCurrentPosition((prev) => {
  //     if (prev === 0) {
  //       return arr.length - 1; // Loop back to the last image
  //     } else {
  //       return prev - 1; // Move to the previous image
  //     }
  //   });
  // };

  // useEffect(() => {
  //   if (currentPosition === 0) {
  //     setIntervalTime(0);
  //   } else {
  //     setIntervalTime(100000);
  //   }
  // }, [currentPosition]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentPosition((prevPosition) => (prevPosition + 1) % arr.length);
  //   }, intervalTime);
  //   return () => clearInterval(interval);
  // }, [arr.length, intervalTime]);

  // console.log(currentPosition);
  // return (
  //   <div className="flex h-screen overflow-hidden text-white text-xl">
  //     {arr.map((image, index) => (
  //       <div
  //         key={index}
  //         className={`flex overflow-hidden flex-shrink-0  ${
  //           currentPosition === 0 ? "" : "transition-transform duration-500"
  //         }`}
  //         style={{
  //           transform:
  //             currentPosition === arr.length
  //               ? ""
  //               : `translateX(-${currentPosition * 100}%)`,
  //         }}
  //       >
  //         <div className={`relative w-screen h-1/2`}>
  //           <img
  //             src={image}
  //             className="h-full w-full object-cover brightness-50"
  //           />
  //           <div className="flex flex-col gap-16 items-start w-full absolute top-[35%] left-[5%]">
  //             <div className="flex flex-col gap-2">
  //               <h1 className="font-bold text-2xl">Title of the Day</h1>
  //               <h1 className="font-bold">
  //                 {index === 0 || index === arr.length - 1
  //                   ? textArr[0].text
  //                   : textArr[index].text}
  //               </h1>
  //               <h1 className="mt-[-10px] font-bold">
  //                 {" "}
  //                 {index === 0 || index === arr.length - 1
  //                   ? textArr[0].textTwo
  //                   : textArr[index].textTwo}
  //               </h1>
  //             </div>

  //             <button className=" top-[75%] right-[60%] border border-white rounded-xl py-3 px-6 font-bold text-lg">
  //               {index === 0 || index === arr.length - 1
  //                 ? textArr[0].bText
  //                 : textArr[index].bText}
  //             </button>
  //           </div>
  //         </div>

  //       </div>
  //     ))}
  //       <div className="absolute text-black">
  //           <button onClick={retreat}>o---</button>
  //           <button onClick={advance}>---o</button>
  //         </div>
  //   </div>

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
};
