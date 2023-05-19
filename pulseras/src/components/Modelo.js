import React from "react";
import Image from "next/image";
import { ColorPaletteMenu } from "./ColorPaletteMenu";
import { AccesoriosLista } from "./AccesoriosLista";
import { useState } from "react";
import Link from "next/link";

export const Modelo = ({ pulsera, idA, idC }) => {
  const [colorSelect, setColorSelect] = useState("");
  const [accesorioSelect, setAccesorioSelect] = useState("");

  const mostrarAccesorioSeleccionado = (accesorio) => {
    console.log("Accesorio seleccionado:", accesorio);
    setAccesorioSelect(accesorio);
    console.log("Accesorio seleccionado:", accesorioSelect);
  };
  const mostrarColorSeleccionado = (color) => {
    console.log("Color seleccionado:", color);
    setColorSelect(color);
    console.log("Color seleccionado:", colorSelect);
  };

  return (
    <div
      className="w-[100%] flex flex-wrap justify-center align-middle border-4 m-12 rounded-md shadow-lg shadow-[#cfb7f1] border-[#cfb7f1] 
    md:w-[100%] md:m-6 md:inline md:py-5"
    >
      {/*PARA LA FORMA MOBIL  */}
      <div className="w-[100%] justify-center align-middle flex m-3 md:hidden">
        <Image src={pulsera.foto} className="w-3/5" alt="imagen" />
      </div>
      <div className="w-[100%] text-center text-2xl font-bold mx-6 md:hidden md:text-3xl">
        <h1>{pulsera.nombre}</h1>
      </div>
      <div className="w-[100%] text-center font-thin mx-6 my-6 md:hidden md:text-2xl">
        <p className="">{pulsera.descripcion}</p>
      </div>
      <div className="w-[100%] text-center font-thin mx-6 my-6 md:hidden md:text-2xl">
        <p className="font-extrabold text-2xl text-green-500">${pulsera.precio}</p>
      </div>
      <div className="md:hidden">
        <div className="w-[100%]">
          <ColorPaletteMenu
            identificador={pulsera.idColor}
            regresaValor={mostrarColorSeleccionado}
          />
        </div>
        <div className="w-[100%]">
          <AccesoriosLista
            identificador={pulsera.idAccesorio}
            regresaValor={mostrarAccesorioSeleccionado}
          />
        </div>
        <div className="w-[100%] flex justify-center align-middle text-white my-5 ">
          <Link href={"/contacto"} className="bg-pink-700 rounded-md px-6 py-3  animate-pulse text-center">
            <button className="">
              QUIERO UNO
            </button>
          </Link>
        </div>
      </div>

      {/*PARA LA FORMA DE ESCRITORIO  */}
      <div className="hidden md:inline-flex md:justify-between md:mx-3">
        <div className="w-1/3 justify-center align-middle flex my-5">
          <Image src={pulsera.foto} className="w-3/5" alt="imagen" />
        </div>
        <div className="w-1/3 flex flex-wrap justify-center align-middle p-10">
          <div className="w-[100%] text-center text-2xl font-bold mx-6 flex justify-center align-middle">
            <h1 className="flex justify-center align-middle md:text-5xl">
              {pulsera.nombre}
            </h1>
          </div>
          <div className="w-[100%] text-center font-thin mx-6 my-6">
            <p className="md:text-2xl">{pulsera.descripcion}</p>
          </div>
          <div className="w-[100%] text-center font-thin mx-6 my-6">
            <p className="md:text-3xl font-extrabold text-green-500">${pulsera.precio}</p>
          </div>
        </div>
        <div className="hidden md:flex md:flex-wrap md:py-16 w-1/3">
          <ColorPaletteMenu
            identificador={pulsera.idColor}
            regresaValor={mostrarColorSeleccionado}
          />
          <AccesoriosLista
            identificador={pulsera.idAccesorio}
            regresaValor={mostrarAccesorioSeleccionado}
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-center align-middle text-white p-10 hidden md:flex ">
        <Link
          href={"/contacto"}
          className="bg-pink-700 rounded-md px-6 p-3 w-[100%] animate-pulse text-center text-white"
        >
          <button className="">QUIERO UNO</button>
        </Link>
      </div>
    </div>
  );
};
