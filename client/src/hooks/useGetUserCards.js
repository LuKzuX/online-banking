import { useAuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const useGetUserCards = () => {
  const { token } = useAuthContext();
  const [cardList, setCardList] = useState("");

  useEffect(() => {
    const getUserCards = async () => {
      try {
        const res = await axios.get("/bank/cards", {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        setCardList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserCards();
  }, [token]);
  return {cardList}
};
