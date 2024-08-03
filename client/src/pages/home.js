import { useAuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useGetUserCards } from "../hooks/useGetUserCards";
import chip1 from "../images/chip1.png";
import { Chart } from "../components/chart";

export const Home = () => {
  const { token } = useAuthContext();
  const { user } = useGetCurrentUser();
  const { cardList } = useGetUserCards();
 
  return (
    <div className="">
      <div className="flex flex-col p-6 gap-10">
        <div className="flex flex-col items-center border-2 rounded-xl p-3 text-2xl">
          <h1>Balance:</h1>
          <h1 className="font-semibold">${user && user.user.balance}</h1>
        </div>
        <Chart/>
        <div className="">
          <h1 className="text-2xl mb-5 text-center">Your Cards:</h1>
          <div className="flex flex-col gap-6 items-center">
            {cardList &&
              cardList.map((el) => (
                <div
                  key={el._id}
                  className="relative h-[148px] w-[211.2px] bg-gradient-to-bl from-neutral-400 to-neutral-500 rounded-lg shadow-lg"
                >
                  <div className="absolute px-5 top-[10%]  text-white">
                    <p className="mb-3 font-semibold text-lg">Online Bank</p>
                    <img className=" h-[45px] " src={chip1}></img>
                    <p className="font-mono tracking-widest">{el.cardNumber}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
