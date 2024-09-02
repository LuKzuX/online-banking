import { useAuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useGetUserCards } from "../hooks/useGetUserCards";
import chip1 from "../images/chip1.png";
import { Chart } from "../components/chart";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { user } = useGetCurrentUser();
  const { cardList } = useGetUserCards();

  return (
    <div className="bg-neutral-100">
      <div className="flex flex-col p-6 gap-10 items-center">
        <div className="flex flex-col text-center max-w-[1024px] border-2 rounded-xl py-3 px-16 text-2xl bg-white">
          <h1>Balance:</h1>
          <h1 className="font-semibold">${user && user.user.balance}</h1>
        </div>
        <Chart />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl mb-5 text-center font-semibold">
            Your Cards
            <div className="w-full h-[2px] main-color mt-1"></div>
          </h1>
          <div className="flex flex-col gap-6 items-center bg-white py-6 px-16 w-full rounded-xl border-2">
            {cardList &&
              cardList.map((el) => {
                const date = new Date(el.expiresIn);
                const year = date.getFullYear();
                const month = date.getMonth();
                const generateCardNumber = (string) => {
                  let cardNumber = "";
                  for (let i = 0; i < string.length; i++) {
                    cardNumber += string[i];
                    if (i == 3 || i == 7 || i == 11) {
                      cardNumber += " ";
                    }
                  }
                  return cardNumber;
                };
                return (
                  <div
                    key={el._id}
                    className="relative h-[148px] w-[211.2px] bg-gradient-to-bl from-blue-500 to-blue-800 rounded-lg shadow-lg"
                  >
                    <div
                      onClick={() => navigate(`/cards/${el._id}`)}
                      className="py-2 px-5 top-[10%] text-white flex flex-col items-start"
                    >
                      <div className="w-full flex items-center justify-betwen text-sm">
                        <p>{el.isCredit ? "Credit Card" : "Debit Card"}</p>
                        <p className="ml-auto">Online Bank</p>
                      </div>
                      <div className="mt-4">
                        <img className=" h-[40px] " src={chip1}></img>
                        <p className="font-mono tracking-widest text-[12px]">
                          {generateCardNumber(el.cardNumber)}
                        </p>
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <p className="text-sm mt-3 self-start">
                          {el.cardHolder}
                        </p>
                        <p className=" text-sm mt-3">
                          {month < 10
                            ? `0${month} / ${year}`
                            : month + " / " + year}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
