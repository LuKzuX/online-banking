import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import chip1 from "../../images/chip1.png"
import axios from "axios";

export const CardDetails = () => {
  const { token } = useAuthContext();
  const [cardInfo, setCardInfo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getCardData = async () => {
      try {
        const res = await axios.get(`/bank/cards/${id}`, {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        setCardInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCardData();
  }, [token]);

  const date = new Date(cardInfo.expiresIn);
                const year = date.getFullYear();
                const month = date.getMonth();

  return (
    <div
    key={cardInfo._id}
    className="relative h-[148px] w-[211.2px] bg-gradient-to-bl from-blue-500 to-blue-800 rounded-lg shadow-lg"
  >
    <div
      className="py-2 px-5 top-[10%] text-white flex flex-col items-start"
    >
      <div className="w-full flex items-center justify-betwen text-sm">
        <p>{cardInfo.isCredit ? "Credit Card" : "Debit Card"}</p>
        <p className="ml-auto">Online Bank</p>
      </div>
      <div className="mt-4">
        <img className=" h-[40px] " src={chip1}></img>
        <p className="font-mono tracking-widest">
          {cardInfo.cardNumber}
        </p>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm mt-3 self-start">
          {cardInfo.cardHolder}
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
};
