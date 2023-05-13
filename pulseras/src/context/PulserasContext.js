"use client";
import { useContext, createContext, useState } from "react";
import {v4 as uuid} from 'uuid'
import pareja_ojo_turco from "../images/pulseras/pareja-ojo-turco.jpeg";

export const PulserasContext = createContext();

export const usePulseras = () => {
  const context = useContext(PulserasContext);
  if (!context) throw Error("usePulseras must used within a provider");
  return context;
};

export const PulserasProvider = ({ children }) => {
  const [pulseras, setPulseras] = useState([
    {
      identificador: uuid(),
      nombre: "PAREJA OJO TURCO",
      foto: pareja_ojo_turco,
      descripcion: "Pulseras para pareja con accesorio de ojo turco",
      precio: 50,
    },
    {
      identificador: uuid(),
      nombre: "PAREJA OJO TURCO",
      foto: pareja_ojo_turco,
      descripcion: "Pulseras para pareja con accesorio de ojo turco",
      precio: 50,
    },
    {
      identificador: uuid(),
      nombre: "PAREJA OJO TURCO",
      foto: pareja_ojo_turco,
      descripcion:"Pulseras para pareja con accesorio de ojo turco",
      precio: 50
    }
  ]);
  return (
    <PulserasContext.Provider
      value={{
        pulseras,
      }}
    >
      {children}
    </PulserasContext.Provider>
  );
};
