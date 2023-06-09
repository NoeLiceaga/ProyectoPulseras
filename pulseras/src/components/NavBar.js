"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../images/logoblanco.png";
import Link from "next/link";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-[100%] bg-[#cfb7f1] shadow font-bmw">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl sm:items-center sm:flex sm:px-8">
        <div>
          <div className="flex items-center justify-between py-3 sm:py-5 sm:block">
            <a href="/" className="">
              <Image
                src={logo}
                alt="logo"
                height={100}
                width={100}
                className="bg-cover"
              />
            </a>
            <div className="sm:hidden">
              <button
                className="p-2 text-white rounded-sm outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 sm:block sm:pb-0 sm:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className=" items-center justify-center space-y-8 sm:flex sm:space-x-6 sm:space-y-0">
              <li className="font-thin text-base text-white hover:text-[#bb9bf0] md:text-white md:font-bold md:text-xl md:hover:text-black ">
                <Link href={"/"} className="text-white">Inicio</Link>
              </li>
              <li className="font-thin text-base text-white hover:text-[#bb9bf0] md:text-white md:font-bold md:text-xl md:hover:text-black">
                <Link href={"/especial"}  className="text-white">Pedido Especial</Link>
              </li>
              <li className="font-thin text-base text-white hover:text-[#bb9bf0] md:text-white md:font-bold md:text-xl  md:hover:text-black">
                <Link href={"/contacto"} className="text-white">
                  Contacto
                </Link>
              </li>
              <li className="font-thin text-base text-white hover:text-[#bb9bf0] md:text-white md:font-bold md:text-xl  md:hover:text-black">
                <Link href={"/nuevo"} className="text-white">
                  Nuevo Producto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
