"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect, useRef } from "react";
import mas from "../images/icon/bx-plus.svg";
import menos from "../images/icon/bx-minus.svg";
import Router from "next/link";
export const ColorPaletteMenu = ({ identificador ,regresaValor}) => {
  const [masColores, setMasColores] = useState(false);
  const [highlightedDiv, setHighlightedDiv] = useState(null);
  const divRef = useRef(null);
  const handleColorSeleccionado = (nombre) => {
    regresaValor(nombre);
  };
  const handleDivClick = (id) => {
    console.log(id);
    setHighlightedDiv(id);
    handleColorSeleccionado(id)

  };

  useEffect(() => {
    // El código dentro de este bloque se ejecuta después del renderizado del componente
    let div = document.getElementById(identificador);
    console.log(div);
    if (divRef.current) {
      if (!masColores) {
        divRef.current.classList.add("hidden");
      } else {
        divRef.current.classList.remove("hidden");
      }
    }
  }, [masColores, divRef]);
  console.log("llave-pallette ", identificador);
  const oculta = (valor) => {
    console.log(valor);
    setMasColores(valor);
  };
  const colores = [
    {color:"#ff7987",id:1},
    {color:"#40CFFF",id:2},
    {color:"#FF0000",id:3},
    {color:"#008000",id:4},
    {color:"#00ffff",id:5},
    {color:"#C8A2C8",id:6},
    {color:"white",id:7},
    {color:"black",id:8},
  ];

  const handleColorSelection = (color, item) => {
    // Lógica para manejar la selección del color
    console.log(`Color seleccionado: ${color}`);
    setHighlightedDiv(color)
    regresaValor(color)
  };

  return (
    <div className="w-[100%] flex flex-wrap justify-center align-middle font-bmw my-2">
      <div className="flex p-2 justify-evenly">
        <h5 className="mx-4">Paleta de Colores</h5>
        {masColores ? (
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
        {colores.map((color) => (
          <button
            className="w-1/5 h-10 m-1 hover:animate-pulse"
            key={color}
            style={highlightedDiv==color.color ? {borderColor : "Red",border:"4px solid green" ,backgroundColor:color.color}:{ backgroundColor: color.color } }
            onClick={() => handleDivClick(color.color)}
          ></button>
        ))}
      </div>
    </div>
  );
};
