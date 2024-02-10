"use client";

// IMPORTS -
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("2662f2c6-977f-4d6f-89c3-dc8b45da2255");
  }, []);

  return null;
};

export default CrispChat;
