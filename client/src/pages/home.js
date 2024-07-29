import { useAuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useGetUserCards } from "../hooks/useGetUserCards";

export const Home = () => {
  const { token } = useAuthContext();
  const { user } = useGetCurrentUser();
  const {cardList} = useGetUserCards()
  return (
    <div className="">
      <div className="flex flex-col p-6">
        <div className="flex flex-col items-center border-2 rounded-xl p-3 text-2xl">
          <h1>Your money:</h1>
          <h1 className="font-semibold">${user && user.user.balance}</h1>
        </div>
        <div className="">
          {cardList && cardList.map((el) => (
            <p>{el.cardHolder}</p> //demo
          ))}
        </div>
      </div>
    </div>
  );
};
