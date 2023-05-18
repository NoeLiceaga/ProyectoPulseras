"use client";
import Image from "next/image";
import IconoConTexto from "@/components/IconoConTexto";
import { Modelo } from "@/components/Modelo";
import { usePulseras } from "@/context/PulserasContext";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.jpg";
import whats from "../images/whats.png";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  const { pulseras } = usePulseras();

  console.log(pulseras);
  return (
    <div className="flexflex-wrap w-[100%]">
      <IconoConTexto />
      <div className="flex justify-center align-middle mt-10 font-bold text-md border-b-4 bg-[#cfb7f1] border-[#bb9bf0] p-5 text-white md:text-4xl md:mt-40">
        <h1>CONOCE LOS MODELOS DISPONIBLES</h1>
      </div>
      <div
        className="flex flex-wrap w-[100%]
      md:justify-between "
      >
        {pulseras.map((pulsera) => (
          <>
            <Modelo
              pulsera={pulsera}
              idA={pulsera.idAccesorio}
              idC={pulsera.idColor}
            />
          </>
        ))}
      </div>
      <div className=" flex justify-center align-middle mt-10 font-bold text-md border-b-4 bg-[#cfb7f1] border-[#bb9bf0] p-5 text-white md:text-4xl md:mt-40">
        <h1>MIS REDES SOCIALES</h1>
      </div>

      <div className="m-5 rounded-md border-2 border-sky-600 p-4 flex flex-wrap justify-center md:m-20 md:flex md:flex-nowrap md:border-4 md:rounded-lg shadow-xl">
        <div className="w-1/3 md:p-14 md:w-1/4">
          <Image src={facebook} />
        </div>
        <div className="w-[100%] p-2 mt-3 rounded-md md:p-5 md:m-5 md:w-2/3 md:justify-center md:align-baseline">
          <div className="p-3 font-bmw bg-sky-600 text-white rounded-md md:text-5xl  md:p-3">
            FACEBOOK
          </div>
          <div className="my-3 font-bmw md:text-3xl md:my-3">
            MI PAGINA DE FACEBOOK:
          </div>
          <div className="font-bmw md:text-3xl md:my-3 text-sky-600">
            <a href="https://www.facebook.com/profile.php?id=100028009779454&mibextid=ZbWKwL">
              GALAXY BRACELET
            </a>
          </div>
        </div>
      </div>

      <div className="m-5 rounded-md border-2 border-pink-500 p-4 flex flex-wrap justify-center md:m-20 md:flex md:flex-nowrap md:border-4 md:rounded-lg shadow-xl">
        <div className="w-1/3 md:p-14 md:w-1/4">
          <Image src={instagram} />
        </div>
        <div className="w-[100%] p-2 mt-3 rounded-md  md:p-5 md:m-5 md:w-2/3 md:justify-center md:align-baseline">
          <div className="p-3 font-bmw bg-pink-500 text-white rounded-md md:text-5xl  md:p-3">
            INSTAGRAM
          </div>
          <div className="my-3 font-bmw md:text-3xl md:my-3">
            MI PAGINA DE INSTAGRAM:
          </div>
          <div className="font-bmw md:text-3xl md:my-3 text-pink-500">
            <a href="https://www.instagram.com/galaxybracelett/?igshid=ZGUzMzM3NWJiOQ%3D%3D">
              GALAXY BRACELET
            </a>
          </div>
        </div>
      </div>

      <div className="m-5 rounded-md border-2 border-green-500 p-4 flex flex-wrap justify-center md:m-20 md:flex md:flex-nowrap md:border-4 md:rounded-lg shadow-xl">
        <div className="w-1/3 md:p-14 md:w-1/4">
          <Image src={whats} />
        </div>
        <div className="w-[100%] p-2 mt-3 rounded-md md:p-5 md:m-5 md:w-2/3 md:justify-center md:align-baseline">
          <div className="p-3 font-bmw bg-green-500 text-white rounded-md md:text-5xl  md:p-3">
            WHATSAPP
          </div>
          <div className="my-3 font-bmw md:text-3xl md:my-3">
            NUMERO DE WHATSAPP:
          </div>
          <div className="font-bmw md:text-3xl md:my-3 text-green-500">
            <a>+52 444 423 7842</a>
          </div>
        </div>
      </div>
    </div>
  );
}
