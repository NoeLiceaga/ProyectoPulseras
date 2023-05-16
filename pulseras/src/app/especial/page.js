"use client"
import React from "react";
import Image from "next/image";
import logoblanco from "../../images/logoblanco.png";
import { SpecialForm } from "@/components/SpecialForm";
function page() {
  return (
    <div className="flex flex-wrap justify-center align-middle">
      <div
        className="w-[100%] mb-14 text-center flex justify-center align-middle mt-10 font-bold text-md border-b-4 text-xl border-[#bb9bf0] p-5 text-black 
        md:text-4xl md:mt-20 md:mx-16"
      >
        <h1>PEDIDO ESPECIAL</h1>
      </div>
      <div className="w-[100%] flex flex-wrap justify-center align-middle mx-10
        md:w-2/5">
        <div className="w-[100%] shadow-2xl shadow-[#cfb7f1] bg-[#cfb7f1] md:p-10 md:rounded-md">
            <Image src={logoblanco}/>
        </div>
        <div className="text-base font-bmw m-8 text-center md:text-xl md:m-10 ">
            <p>PODEMOS CREAR CUALQUIER DISEÑO QUE QUIERAS, SOLO LLENA EL FORMULARIO CON LAS ESPECIFICACIONES QUE DESEES</p>
        </div>
      </div>
      <div className="w-[100%] mx-3 md:w-2/5">
            <SpecialForm />
      </div>
    </div>
  );
}

export default page;
