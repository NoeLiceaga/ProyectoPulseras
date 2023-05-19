"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import pareja_ojo_turco from "../images/pulseras/pareja-ojo-turco.jpeg";
import pareja_infinito from "../images/pulseras/Pareja-infinito.jpeg"
import pareja_corazon from "../images/pulseras/Pareja-corazon.jpeg"
import pareja_corazon_negra from "../images/pulseras/pareja-corazon-negra.jpeg"
import pulsera_sencilla from "../images/pulseras/pulsera-sencilla.jpeg"
import pulsera_con_accesorio from "../images/pulseras/pulseras-con-accesorios.jpeg"
import pulsera_con_ancla from "../images/pulseras/Pareja-ancla.jpeg"
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
  const [pulseras, setPulseras] = useState([]);
  useEffect(() => {
    const storedPulseras = localStorage.getItem("pulseras");
    if (storedPulseras) {
      setPulseras(JSON.parse(storedPulseras));
    } else {
      setPulseras([
        {
          idAccesorio: generarUUID(),
          idColor: generarUUID(),
          nombre: "PAREJA OJO TURCO",
          foto: pareja_ojo_turco,
          descripcion: "Pulseras para pareja con accesorio de ojo turco",
          precio: 60,
        },
        {
          idAccesorio: generarUUID(),
          idColor: generarUUID(),
          nombre: "PAREJA INFINITO",
          foto: pareja_infinito,
          descripcion: "Pulseras para pareja con accesorio de infinito",
          precio: 60,
        },
        {
          idAccesorio: generarUUID(),
          idColor: generarUUID(),
          nombre: "PAREJA CORAZON BLANCO",
          foto: pareja_corazon,
          descripcion: "Pulseras para pareja con accesorio de corazón blanco",
          precio: 60,
        },
        {
          idAccesorio: generarUUID(),
          idColor: generarUUID(),
          nombre: "PAREJA CORAZON NEGRO",
          foto: pareja_corazon_negra,
          descripcion: "Pulseras para pareja con accesorio de corazón negra",
          precio: 60,
        },
        {
          idAccesorio: generarUUID(),
          idColor: generarUUID(),
          nombre: "PULSERA INDIVIDUAL ANCLA",
          foto: pulsera_con_ancla,
          descripcion: "Pulsera con accesorio de ancla",
          precio: 30,
        },
        {
          idAccesorio: generarUUID(),
          idColor: generarUUID(),
          nombre: "PULSERA INDIVIDUAL SENCILLA",
          foto: pulsera_sencilla,
          descripcion: "Pulsera sencilla sin accesorio",
          precio: 30,
        },
        {
          idAccesorio: generarUUID(),
          idColor: generarUUID(),
          nombre: "PULSERA INDIVIDUAL CON ACCESORIO",
          foto: pulsera_con_accesorio,
          descripcion: "Pulsera con cualquier accesorio",
          precio: 30,
        },
        // Agrega otros elementos predefinidos aquí si es necesario
      ]);
    }
  }, []);

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
