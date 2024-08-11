import { useEffect, useState } from "react";
import { useGetCurrentUserTransactions } from "../../hooks/useGetUserTransactions";

const Transactions = () => {
  const { transactions } = useGetCurrentUserTransactions();
    
  return <div className="bg-neutral-100 p-6 flex flex-col gap-6">
    {transactions && transactions.map((el, index) => (
        <div className="bg-white p-6 rounded-xl border-2 text-xl" key={el._id}>
            <p>{el.transactionName}</p>
            <p>${el.transactionValue}</p>
            <p>{el.transactionDate}</p>
        </div>
    ))}
  </div>;
};

export default Transactions;
