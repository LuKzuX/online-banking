import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCarousel } from "../hooks/useCarousel";
export const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      {useCarousel()}
    </div>
  );
};
