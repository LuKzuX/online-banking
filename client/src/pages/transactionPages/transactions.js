import { useEffect, useState } from "react";
import { useGetCurrentUserTransactions } from "../../hooks/useGetUserTransactions";

const Transactions = () => {
  const { transactions } = useGetCurrentUserTransactions();

  return (
    <div className="bg-neutral-100 p-6 flex flex-col gap-6">
      {transactions &&
        transactions.map((el, index) => {
          const date = new Date(el.transactionDate);
          const year = new Date(el.transactionDate).getFullYear()
          const month = date.getMonth();
          const day = date.getDay();
          return (
            <div
              className="bg-white p-6 rounded-xl border-2 text-xl"
              key={el._id}
            >
              <p>{el.transactionName}</p>
              <p>${el.transactionValue}</p>
              <p>{`${month < 10 ? `0${month}` : `${month}`}/${
                day < 10 ? `0${day}` : `${day}`
              }/${year} `}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Transactions;
