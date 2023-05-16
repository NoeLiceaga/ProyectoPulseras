import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form, FormControl, FormGroup } from 'react-bootstrap';
export function SpecialForm() {
  const [state, handleSubmit] = useForm("meqwdrlk");
  if (state.succeeded) {
      return <p>Thanks for joining! Se ha mandado tu correo</p>;
  }
  return (
    <Form
    onSubmit={handleSubmit}
    className="p-6 border-2  shadow-2xl m-3
  md:m-5"
  >
    <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
      <Form.Label className="w-[100%] my-3 font-bold">Nombre:</Form.Label>
      <FormControl
        type="text"
        name="name"
        placeholder="Ingresa Nombre"
        className="border-2 w-[100%] p-2 mb-3"
        value={null}
        id="name"
      />
    </FormGroup>
    <FormGroup>
      <Form.Label className="w-[100%] my-3 font-bold" htmlFor="email">
        Correo:
      </Form.Label>
      <Form.Control
        type="email"
        placeholder="Ingresa Email"
        className="w-[100%] border-2 p-2"
        id="email"
        name="email"
        required
      />
      <Form.Text className="text-muted text-gray-300">
        Nunca compartiremos tu email con nadie más
      </Form.Text>
    </FormGroup>
    <FormGroup controlId="formBasicEmail" className="flex flex-wrap   ">
      <Form.Label className="w-[100%] my-3 font-bold">Teléfono:</Form.Label>
      <FormControl
        type="phone"
        placeholder="Ingresa teléfono"
        className="border-2 w-[100%] p-2 mb-3"
        id="phone"
        name="phone"
        required
      />
    </FormGroup>
    <FormGroup>
      <Form.Label className="w-[100%] my-5 font-bold">Descripcion:</Form.Label>
      <Form.Control
        type="textarea"
        multiple
        placeholder="Descripción"
        className="w-[100%] border-2 p-2 h-40 my-3"
        id="message"
        name="message"
        required
      />
      <Form.Text className="text-muted text-gray-300">*Obligatorio</Form.Text>
    </FormGroup>
    <button
      type="submit"
      disabled={state.submitting}
      className="bg-[#a274eb] hover:bg-[#bb9bf0] border-0 p-4 rounded-md my-2 w-[100%] text-white  animate-pulse"
    >
      Submit
    </button>
    <ValidationError prefix="Message" field="message" errors={state.errors} />
  </Form>
  );
}