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

  return (
    <div>
      <div className="relative h-[148px] w-[211.2px] bg-gradient-to-bl from-blue-600 to-blue-800 rounded-lg shadow-lg">
        <div className="absolute px-5 top-[10%]  text-white">
          <p className="mb-3 font-semibold text-lg">Online Bank</p>
          <img className=" h-[45px]" src={chip1}></img>
          <p className="font-mono tracking-widest">{cardInfo.cardNumber}</p>
        </div>
      </div>
    </div>
  );
};
