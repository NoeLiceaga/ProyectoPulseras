"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import mas from "../images/icon/bx-plus.svg";
import menos from "../images/icon/bx-minus.svg";

import ancla from "../images/icon/bx-anchor.svg"
import moon from "../images/icon/bxs-moon.svg"
import star from "../images/icon/bxs-star.svg"
import eye from "../images/icon/bxs-bullseye.svg"
import butterfly from "../images/icon/bx-bug.svg"
import heart from "../images/icon/bxs-heart-circle.svg"
import inifinite from "../images/icon/bx-infinite.svg"
import cross from "../images/icon/bx-plus.svg"
import circle from "../images/icon/bxs-circle.svg"
const AccesoriosLista = ({id}) => {
  console.log("llave-accesorio ",id)
  const [masAccesorio, setMasAccesorio] = useState(false);
  const oculta = (valor) => {
    console.log(valor)
    setMasAccesorio(valor)
    let div = document.getElementById(id)
    if(!valor){
        div.classList.add('hidden')
    }else{
        div.classList.remove('hidden')
    }
  }
  const accesorios = [
    {
        nombre: "Ancla",
        icono : ancla
    },
    {
        nombre: "Luna",
        icono : moon
    },
    {
        nombre: "Estrella",
        icono : star
    },    {
        nombre: "Ojo",
        icono : eye
    },    {
        nombre: "Mariposa",
        icono : butterfly
    },    {
        nombre: "Corazón",
        icono : heart
    },
    {
        nombre: "Infinito",
        icono : inifinite
    },
    {
        nombre: "Cruz",
        icono : cross
    },
    {
        nombre: "Perla",
        icono : circle
    }
  ];

  const handleColorSelection = (color) => {
    // Lógica para manejar la selección del color
    console.log(`Color seleccionado: ${color}`);
  };

  return (
    <div className="w-[100%] flex flex-wrap justify-center align-middle font-bmw my-2">
      <div className="flex p-2 justify-evenly">
        <h2 className="mx-4">Accesorio</h2>
        {masAccesorio ? (
          <Image src={menos} onClick={() => oculta(false)}className="animate-bounce" />
        ) : (
          <Image src={mas} onClick={() => oculta(true)} className="animate-bounce"/>
        )}
      </div>
      <div className="color-buttons w-[100%] flex flex-wrap justify-center m-1 hidden" id={id}>
        {accesorios.map((accesorio) => (
            <div className="w-28 flex flex-wrap justify-center align-middle m-1 border-2 p-3 text-center rounded-md" >
                <Image src={accesorio.icono} className=""/>
                <h1 className="mx-2 w-[100%] text-center">{accesorio.nombre}</h1>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AccesoriosLista;
