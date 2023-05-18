import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import mas from "../images/icon/bx-plus.svg";
import menos from "../images/icon/bx-minus.svg";

import ancla from "../images/icon/bx-anchor.svg";
import moon from "../images/icon/bxs-moon.svg";
import star from "../images/icon/bxs-star.svg";
import eye from "../images/icon/bxs-bullseye.svg";
import butterfly from "../images/icon/bx-bug.svg";
import heart from "../images/icon/bxs-heart-circle.svg";
import inifinite from "../images/icon/bx-infinite.svg";
import cross from "../images/icon/bx-plus.svg";
import circle from "../images/icon/bxs-circle.svg";

export const AccesoriosLista = ({ identificador, regresaValor }) => {
  const [masAccesorio, setMasAccesorio] = useState(false);
  const divRef = useRef(null);
  const [highlightedDiv, setHighlightedDiv] = useState(null);
  const handleAccesorioSeleccionado = (nombre) => {
    regresaValor(nombre);
  };

  const handleDivClick = (id) => {
    console.log(id);
    setHighlightedDiv(id);
    handleAccesorioSeleccionado(id)
  };

  useEffect(() => {
    let div = document.getElementById(identificador);
    if (divRef.current) {
      if (!masAccesorio) {
        divRef.current.classList.add("hidden");
      } else {
        divRef.current.classList.remove("hidden");
      }
    }
  }, [masAccesorio]);

  const oculta = (valor) => {
    setMasAccesorio(valor);
  };

  const accesorios = [
    {
      id: 1,
      nombre: "Ancla",
      icono: ancla,
    },
    {
      id: 2,
      nombre: "Luna",
      icono: moon,
    },
    {
      id: 3,
      nombre: "Estrella",
      icono: star,
    },
    {
      id: 4,
      nombre: "Ojo",
      icono: eye,
    },
    {
      id: 5,
      nombre: "Mariposa",
      icono: butterfly,
    },
    {
      id: 6,
      nombre: "Corazón",
      icono: heart,
    },
    {
      id: 7,
      nombre: "Infinito",
      icono: inifinite,
    },
    {
      id: 8,
      nombre: "Cruz",
      icono: cross,
    },
    {
      id: 9,
      nombre: "Perla",
      icono: circle,
    },
  ];

  return (
    <div className="w-[100%] flex flex-wrap justify-center align-middle font-bmw my-2">
      <div className="flex p-2 justify-evenly">
        <h2 className="mx-4">Accesorio</h2>
        {masAccesorio ? (
          <Image
            src={menos}
            onClick={() => oculta(false)}
            className="animate-bounce"
          />
        ) : (
          <Image
            src={mas}
            onClick={() => oculta(true)}
            className="animate-bounce"
          />
        )}
      </div>
      <div
        className="color-buttons w-[100%] flex flex-wrap justify-center m-1 hidden"
        id={identificador}
        ref={divRef}
      >
        {accesorios.map((accesorio) => (
          <div
            className="w-28 flex flex-wrap justify-center align-middle m-1 border-2 p-3 text-center rounded-md
            md:flex md:w-1/3 md:flex-wrap md:justify-start md:m-0"
            key={accesorio.id}
            style={
              highlightedDiv === accesorio.nombre
                ? { background: "gray" }
                : { background: "white" }
            }
            onClick={() => handleDivClick(accesorio.nombre)}
          >
            <Image src={accesorio.icono} className="md:flex" alt="imagen" />
            <h1 className="mx-2 w-[100%] text-center md:flex md:w-1/3">
              {accesorio.nombre}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

