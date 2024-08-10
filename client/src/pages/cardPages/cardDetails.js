import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import chip1 from "../../images/chip1.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CardDetails = () => {
  const { token } = useAuthContext();
  const [cardInfo, setCardInfo] = useState("");
  const { id } = useParams();
  const [cardStatus, setCardStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getCardData = async () => {
      try {
        const res = await axios.get(`/bank/cards/${id}`, {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        setCardInfo(res.data);
        setCardStatus(res.data.isActive);
      } catch (error) {
        console.log(error);
      }
    };

    getCardData();
  }, [token]);

  const changeCardStatus = async () => {
    try {
      const res = await axios.patch(`/bank/cards/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token.data.token}`,
        },
      });
      setCardStatus(res.data.isActive);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCard = async () => {
    try {
      await axios.delete(`/bank/cards/${id}`, {
        headers: {
          Authorization: `Bearer ${token.data.token}`,
        },
      });
      navigate(`/home`);
    } catch (error) {
      console.log(error);
    }
  };

  const date = new Date(cardInfo.expiresIn);
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <div className="bg-neutral-100 h-screen p-6">
      <div className="flex flex-col items-center gap-8 mt-5 bg-white py-6 border-2 rounded-xl">
        <div className="relative h-[148px] w-[211.2px] bg-gradient-to-bl from-blue-500 to-blue-800 rounded-lg shadow-lg">
          <div className="py-2 px-5 top-[10%] text-white flex flex-col items-start">
            <div className="w-full flex items-center justify-betwen text-sm">
              <p>{cardInfo.isCredit ? "Credit Card" : "Debit Card"}</p>
              <p className="ml-auto">Online Bank</p>
            </div>
            <div className="mt-4">
              <img className=" h-[40px] " src={chip1}></img>
              <p className="font-mono tracking-widest">{cardInfo.cardNumber}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-sm mt-3 self-start">{cardInfo.cardHolder}</p>
              <p className=" text-sm mt-3">
                {month < 10 ? `0${month} / ${year}` : month + " / " + year}
              </p>
            </div>
          </div>
        </div>
        <div
          key={cardInfo._id}
          className="relative h-[148px] w-[211.2px] bg-gradient-to-bl from-blue-500 to-blue-800 rounded-lg shadow-lg"
        >
          <div className="py-2  top-[10%] text-white flex flex-col items-start">
            <div className="w-full h-10 mt-2  bg-black"></div>
            <div className="px-6 flex items-center w-full mt-4">
              <div className="flex flex-col items-center justify-around bg-yellow-100 h-9 w-[60%]">
                <div className="w-full h-1 bg-neutral-200"></div>
                <div className="w-full h-1 bg-neutral-200"></div>
                <div className="w-full h-1 bg-neutral-200"></div>
              </div>
              <div className="flex items-center justify-center bg-white h-6 w-[20%] text-black text-[10px] ">
                {cardInfo.securityCode}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <button
            className={`${
              cardStatus
                ? "bg-green-500 shadow-md shadow-green-500"
                : "bg-red-500 shadow-md shadow-red-500"
            } px-6 py-3 rounded-xl text-white`}
            onClick={changeCardStatus}
          >
            {cardStatus ? "Enabled" : "Disabled"}
          </button>
          <button
            className="text-white bg-red-800 px-6 py-3 rounded-xl shadow-md shadow-red-900"
            onClick={deleteCard}
          >
            Delete card
          </button>
        </div>
      </div>
    </div>
  );
};
