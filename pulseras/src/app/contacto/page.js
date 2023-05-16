"use client";
import React from "react";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorPaletteMenu from "@/components/ColorPaletteMenu";
import AccesoriosLista from "@/components/AccesoriosLista";
import ancla from "../../images/icon/bx-anchor.svg";
import moon from "../../images/icon/bxs-moon.svg";
import star from "../../images/icon/bxs-star.svg";
import eye from "../../images/icon/bxs-bullseye.svg";
import butterfly from "../../images/icon/bx-bug.svg";
import heart from "../../images/icon/bxs-heart-circle.svg";
import inifinite from "../../images/icon/bx-infinite.svg";
import cross from "../../images/icon/bx-plus.svg";
import circle from "../../images/icon/bxs-circle.svg";
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
const accesorios = [
  {
    nombre: "Ancla",
    icono: ancla,
  },
  {
    nombre: "Luna",
    icono: moon,
  },
  {
    nombre: "Estrella",
    icono: star,
  },
  {
    nombre: "Ojo",
    icono: eye,
  },
  {
    nombre: "Mariposa",
    icono: butterfly,
  },
  {
    nombre: "Corazón",
    icono: heart,
  },
  {
    nombre: "Infinito",
    icono: inifinite,
  },
  {
    nombre: "Cruz",
    icono: cross,
  },
  {
    nombre: "Perla",
    icono: circle,
  },
];

function page() {
  return (
    <div className="flex flex-wrap">
      <div
        className="w-[100%] text-center flex justify-center align-middle mt-10 font-bold text-md border-b-4 text-xl border-[#bb9bf0] p-5 text-black 
        md:text-4xl md:mt-20 md:mx-16"
      >
        <h1>CONTACTAME</h1>
      </div>
      <div className="w-[100%] md:w-1/2 m-5">
        <div>
          <h3 className="md:text-xl">COLORES DISPONIBLES</h3>
          {colores.map((color) => (
            <div className="w-[100%]">
              <button
                style={{ background: color }}
                className="w-[100%] p-3 rounded-md shadow-lg md:m-2"
              ></button>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          <h3 className="w-[100%] my-2 md:text-xl">ACCESORIOS DISPONIBLES</h3>
          {accesorios.map((a) => (
            <div className="w-[45%] border-2 flex flex-wrap justify-center align-middle m-1 shadow-md
            md:w-1/4 md:p-3" key={a.id}>
              <Image src={a.icono} className="md:flex" alt="imagen" />
              <h1 className="mx-2 w-1/3 text-center text-base  
              md:flex md:w-1/3 md:text-xl">
                {a.nombre}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default page;
