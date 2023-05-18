"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import { DropdownComponent } from "./DropdownComponent";
import { DropdownComponent2 } from "./DropdownComponent2";
import { DropdownComponentPulsera } from "./DropdownComponentPulsera";
export const ContactForm = ({ pulseraSelecta}) => {
  const [state, handleSubmit] = useForm("myyavpba");
  const [descripcion, setDescripcion] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [accesorio, setAccesorio] = useState("");
  const [pais, setPais] = useState("México");
  const valores = [];
  function handleDescripcionChange(event) {
    setDescripcion(event.target.value);
    console.log(modelo);
    console.log(color);
    console.log(accesorio);
    console.log(pais);
    console.log(valores)
  }
  const handlePaisChange = (event) => {
    setPais(event.target.value);
    setDescripcion(
      "Modelo: " +
        modelo +
        "-" +
        "Color: " +
        color +
        "-" +
        "Accesorio: " +
        accesorio +
        "-" +
        "Pais: " +
        event.target.value
    );
    valores.push(event.target.value)
  };

  const handleAccesorioChange = (valor) => {
    setAccesorio(valor);
    console.log(valor);
    setDescripcion(
      "Modelo: " +
        modelo +
        "-" +
        "Color: " +
        color +
        "-" +
        "Accesorio: " +
        accesorio +
        "-" +
        "Pais: " +
        pais
    );
    valores.push(valor)

  };

  const handleModeloChange = (valor) => {
    setModelo(valor);
    console.log(valor);
    setDescripcion(
      "Modelo: " +
        modelo +
        "-" +
        "Color: " +
        color +
        "-" +
        "Accesorio: " +
        accesorio +
        "-" +
        "Pais: " +
        pais
    );
    valores.push(valor)
  };

  const handleColorChange = (valor) => {
    setColor(valor);
    console.log(valor);
    setDescripcion(
      "Modelo: " +
        modelo +
        "-" +
        "Color: " +
        color +
        "-" +
        "Accesorio: " +
        accesorio +
        "-" +
        "Pais: " +
        pais
    );
    valores.push(valor)
  };

  if (state.succeeded) {
    return <h1 className="text-2xl text-center">TU CORREO SE HA ENVIADO CON EXITO</h1>;
  }
  return (
    <Form
      onSubmit={handleSubmit}
      className="p-6 border-2  shadow-2xl m-3
    md:m-5"
    >
      <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
        <Form.Label className="w-full">Nombre:</Form.Label>
        <FormControl
          type="text"
          name="name"
          placeholder="Ingresa Nombre"
          className="border-2 w-full p-2"
          value={null}
          id="name"
          required
        />
      </FormGroup>
      <FormGroup>
        <Form.Label className="w-full" htmlFor="email">
          Correo:
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa Email"
          className="w-full border-2 p-2"
          id="email"
          name="email"
          required
        />
        <Form.Text className="text-muted text-gray-300">
          Nunca compartiremos tu email con nadie más
        </Form.Text>
      </FormGroup>
      <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
        <Form.Label className="w-full">Teléfono:</Form.Label>
        <FormControl
          type="phone"
          placeholder="Ingresa teléfono"
          className="border-2 w-full p-2"
          id="phone"
          name="phone"
          required
        />
      </FormGroup>
      <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
        <Form.Label className="w-full m-1">Modelo:</Form.Label>
        <DropdownComponentPulsera funcionCambio={handleModeloChange} />
      </FormGroup>
      <FormGroup className="flex">
        <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
          <Form.Label className="w-full m-1">Color:</Form.Label>
          <DropdownComponent2 funcionCambio={handleColorChange} />
        </FormGroup>
        <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
          <Form.Label className="w-full m-1">Accesorio:</Form.Label>
          <DropdownComponent funcionCambio={handleAccesorioChange} />
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <Form.Label className="w-[100%] my-2">
          Pais (en caso de que no seas de Mexico):
        </Form.Label>
        <Form.Control
          type="textarea"
          placeholder="Pais"
          className="w-full border-2 p-2"
          onChange={handlePaisChange}
          required
        />
        <Form.Text className="text-muted text-gray-300">*Opcional</Form.Text>
      </FormGroup>
      <FormGroup>
        <Form.Label className="w-full">Descripcion:</Form.Label>
        <Form.Control
          type="textarea"
          placeholder="Descripción"
          className="w-full border-2 p-2"
          id="message"
          name="message"
          value={descripcion}
          onChange={handleDescripcionChange}
          required
        />
        <Form.Text className="text-muted text-gray-300">*Opcional</Form.Text>
      </FormGroup>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-[#a274eb] hover:bg-[#bb9bf0] border-0 p-4 rounded-md my-2 w-full text-white  animate-pulse"
      >
        Submit
      </button>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </Form>
  );
};
