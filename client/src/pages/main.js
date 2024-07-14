import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCarousel } from "../hooks/useCarousel";
import { FaCreditCard } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaNewspaper } from "react-icons/fa6";
import Footer from "../components/Footer";
export const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      {useCarousel()}
      <div className="px-6 grid grid-cols-1 gap-10 mt-10">
        <div className="border border-neutral-300 rounded-xl px-4 py-6">
          <FaCreditCard size={30} className="mb-2" />
          <h1 className="text-2xl font-semibold">Title One</h1>
          <p className="text-lg">lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="border border-neutral-300 rounded-xl px-4 py-6">
          <FaMoneyBillWave size={30} className="mb-2" />
          <h1 className="text-2xl font-semibold">Title Two</h1>
          <p className="text-lg">lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="border border-neutral-300 rounded-xl px-4 py-6">
          <FaNewspaper size={30} className="mb-2" />
          <h1 className="text-2xl font-semibold">Title Three</h1>
          <p className="text-lg">lorem ipsum dolor sit amet consectetur </p>
        </div>
        <div className="border border-neutral-300 rounded-xl px-4 py-6">
          <BsFillQuestionCircleFill size={30} className="mb-2" />
          <h1 className="text-2xl font-semibold">Title Four</h1>
          <p className="text-lg">lorem ipsum dolor sit amet consectetur </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
