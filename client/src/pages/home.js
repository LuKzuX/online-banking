import { useAuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useGetUserCards } from "../hooks/useGetUserCards";

export const Home = () => {
  const { token } = useAuthContext();
  const { user } = useGetCurrentUser();
  const { cardList } = useGetUserCards();
  return (
    <div className="">
      <div className="flex flex-col p-6 gap-10">
        <div className="flex flex-col items-center border-2 rounded-xl p-3 text-2xl">
          <h1>Your money:</h1>
          <h1 className="font-semibold">${user && user.user.balance}</h1>
        </div>
        <div className="">
          <h1 className="text-2xl mb-5">Your Cards</h1>
          {cardList &&
            cardList.map((el) => (
              <div className="relative h-[128px] w-[191.2px] bg-neutral-500 rounded-lg"></div>
            ))}
        </div>
      </div>
    </div>
  );
};
