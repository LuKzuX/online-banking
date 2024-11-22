import { useAuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import axios from "axios";

export const useGetCurrentUserTransactions = () => {
  const { token } = useAuthContext();
  const [transactions, setTransactions] = useState("");

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await axios.get("/bank/transactions", {
          headers: {
            Authorization: `Bearer ${token.data.token}`,
          },
        });
        setTransactions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTransactions();
  }, [token]);

  return { transactions };
};
