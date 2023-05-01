"use client"
import { useContext, createContext, useState } from "react";

export const PulserasContext = createContext();

export const usePulseras = () => {
  const context = useContext(PulserasContext);
  if (!context) throw Error("usePulseras must used within a provider");
  return context;
};

export const PulserasProvider = ({ children }) => {
  const [pulseras, setPulseras] = useState([

    {
      nombre: "ALUMINIOS",
      icono: "x",
      descripcion: "Compra de Aluminio Tipos: Serie 5000, 380, 6063, macizo, delgado, 1100, perfil, bote, cable y litografía.",
      imagenes:"x"
    },
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
