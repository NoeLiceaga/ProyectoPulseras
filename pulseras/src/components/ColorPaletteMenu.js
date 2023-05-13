"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import mas from "../images/icon/bx-plus.svg";
import menos from "../images/icon/bx-minus.svg";

const ColorPaletteMenu = ({id}) => {
  console.log("llave-pallette ", id)
  const [masColores, setMasColores] = useState(false);
  const oculta = (valor) => {
    console.log(valor)
    setMasColores(valor)
    console.log("Valor clickeado id ", id)
    let div = document.getElementById(id)
    console.log(id)
    if(!valor){
        div.classList.add('hidden')
    }else{
        div.classList.remove('hidden')
    }
  }
  const colores = [
    "#ff7987",
    "#40CFFF",
    "#FF0000",
    "#008000",
    "#00ffff",
    "#C8A2C8",
    "white",
    "black",
  ];

  const handleColorSelection = (color, item) => {
    // Lógica para manejar la selección del color
    console.log(`Color seleccionado: ${color}`);
  };

  return (
    <div className="w-[100%] flex flex-wrap justify-center align-middle font-bmw my-2">
      <div className="flex p-2 justify-evenly">
        <h2 className="mx-4">Paleta de Colores</h2>
        {masColores ? (
          <Image src={menos} onClick={() => oculta(false)} className="animate-bounce"/>
        ) : (
          <Image src={mas} onClick={() => oculta(true)} className="animate-bounce"/>
        )}
      </div>
      <div className="color-buttons w-[100%] flex flex-wrap justify-center m-1 hidden" id={id}>
        {colores.map((color) => (
          <button
            className="w-1/5 h-10 m-1 hover:animate-pulse"
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelection(color)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPaletteMenu;
