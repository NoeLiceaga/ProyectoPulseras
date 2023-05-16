"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import pareja_ojo_turco from "../images/pulseras/pareja-ojo-turco.jpeg";

export const PulserasContext = createContext();

export const usePulseras = () => {
  const context = useContext(PulserasContext);
  if (!context) throw Error("usePulseras must used within a provider");
  return context;
};
export function generarUUID() {
  return uuid().replace(/-/g, "");
}

export const PulserasProvider = ({ children }) => {
  const [pulseras, setPulseras] = useState([
    {
      idAccesorio: generarUUID(),
      idColor: generarUUID(),
      nombre: "PAREJA OJO TURCO",
      foto: pareja_ojo_turco,
      descripcion: "Pulseras para pareja con accesorio de ojo turco",
      precio: 50,
    },
    {
      idAccesorio: generarUUID(),
      idColor: generarUUID(),
      nombre: "PAREJA OJO TURCO",
      foto: pareja_ojo_turco,
      descripcion: "Pulseras para pareja con accesorio de ojo turco",
      precio: 50,
    },
    {
      idAccesorio: generarUUID(),
      idColor: generarUUID(),
      nombre: "PAREJA OJO TURCO",
      foto: pareja_ojo_turco,
      descripcion: "Pulseras para pareja con accesorio de ojo turco",
      precio: 50,
    },
  ]);
  useEffect(() => {
    localStorage.setItem("pulseras", JSON.stringify(pulseras));
  }, [pulseras]);

  const createPulsera = (nombre, descripcion, precio) => {
    setPulseras([
      ...pulseras,
      {
        idAccesorio: generarUUID(),
        idColor: generarUUID(),
        nombre,
        foto: pareja_ojo_turco,
        descripcion,
        precio,
      },
    ]);
  };
  return (
    <PulserasContext.Provider
      value={{
        pulseras,
        createPulsera,
      }}
    >
      {children}
    </PulserasContext.Provider>
  );
};
