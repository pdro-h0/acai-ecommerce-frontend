"use client";

import { useContext } from "react";
import { PaymentContext } from "../context/payment-context";

export const usePyament = () => useContext(PaymentContext);
