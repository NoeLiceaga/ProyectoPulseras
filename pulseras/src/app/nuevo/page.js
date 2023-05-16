"use client";
import React, { useState } from "react";
import { usePulseras } from "@/context/PulserasContext";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormGroup } from "react-bootstrap";
function page() {
  const [pulsera, setPulsera] = useState();
  const { createPulsera } = usePulseras();
  const router = useRouter()
  const handleChange = (e) => {
    setPulsera({ ...pulsera, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createPulsera(pulsera.nombre, pulsera.descripcion, pulsera.precio);
    router.push('/')
  };

  return (
    <div className="flex flex-wrap justify-center align-middle">
      <div
        className="w-[100%] mb-14 text-center flex justify-center align-middle mt-10 font-bold text-md border-b-4 text-xl border-[#bb9bf0] p-5 text-black 
        md:text-4xl md:mt-20 md:mx-16"
      >
        <h1>NUEVO PRODUCTO</h1>
      </div>
      <Form
        onSubmit={handleSubmit}
        className="p-6 border-2  shadow-2xl m-3 
  md:m-5 md:w-3/5"
      >
        <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
          <Form.Label className="w-[100%] my-3 font-bold">Nombre:</Form.Label>
          <FormControl
            type="text"
            name="nombre"
            placeholder="Ingresa Nombre"
            className="border-2 w-[100%] p-2 mb-3"
            value={null}
            onChange={handleChange}
            id="name"
          />
        </FormGroup>
        <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
          <Form.Label className="w-[100%] my-3 font-bold">Precio:</Form.Label>
          <FormControl
            name="precio"
            type="number"
            placeholder="Ingresa Precio"
            className="border-2 w-[100%] p-2 mb-3"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Form.Label className="w-[100%] my-5 font-bold">
            Descripcion:
          </Form.Label>
          <Form.Control
            type="textarea"
            multiple
            placeholder="Descripción"
            className="w-[100%] border-2 p-2 h-40 my-3"
            id="message"
            name="descripcion"
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted text-gray-300">
            *Obligatorio
          </Form.Text>
        </FormGroup>
        <button
          type="submit"
          className="bg-[#a274eb] hover:bg-[#bb9bf0] border-0 p-4 rounded-md my-2 w-[100%] text-white  animate-pulse"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}

export default page;
