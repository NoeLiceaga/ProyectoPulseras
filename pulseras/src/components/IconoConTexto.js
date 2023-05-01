import React from "react";
import logo from "../images/logo.png";
import logoblanco from "../images/logoblanco.png";
import Image from "next/image";
function IconoConTexto() {
  return (
    <div className="flex flex-wrap items-center align-middle justify-center mt-24 font-bmw font-extrabold h-[100%] md:flex md:flex-wrap md:justify-center md:mt-48">
      <div className="md:text-5xl md:justify-center md:align-middle md:text-center md:items-center md:flex hidden">
        <h1 className="text-center">GALAXY</h1>
      </div>
      <div className="w-1/3 shadow-2xl shadow-[#cfb7f1] bg-[#cfb7f1] rounded-[50%] py-6   md:rounded-[50%] md:py-[72px] md:mx-10 md:px-2 md:w-1/3 md:mr-5">
        <Image src={logoblanco} />
      </div>
      <div className="md:text-5xl md:justify-center md:align-middle md:text-center md:items-center md:flex hidden">
        <h1 className="">BRACELET</h1>
      </div>
      <div className="w-[100%] md:hidden justify-center align-middle flex py-5 text-3xl">
        <h1 className="">GALAXY BRACELET</h1>
      </div>
      <div className="font-light text-xs mx-5 my-5 py-5 border-b-4 border-[#bb9bf0] text-center md:w-[80%] md:text-3xl md:py-10  md:mx-10 md:font-extralight">
        <p>"CREAMOS PULSERAS MACRAME ARTESANALES HECHAS A MANO POR MI, KAREN MACIAS"</p>
      </div>
    </div>
  );
}

export default IconoConTexto;
