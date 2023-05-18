import {
  Form,
  FormGroup,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export const DropdownComponent = ({funcionCambio}) => {
  const [valueAccesorio, setValueAccesorio] = useState("");
  const handleSelectAccesorio = (e) => {
    console.log(e);
    setValueAccesorio(e);
  };

  const accesorios = [
    {
      nombre: "Ancla",
    },
    {
      nombre: "Luna",
    },
    {
      nombre: "Estrella",
    },
    {
      nombre: "Ojo",
    },
    {
      nombre: "Mariposa",
    },
    {
      nombre: "Corazón",
    },
    {
      nombre: "Infinito",
    },
    {
      nombre: "Cruz",
    },
    {
      nombre: "Perla",
    },
  ];
  return (
    <Form.Group controlId="exampleForm.SelectCustom">
      <Dropdown>
        <DropdownButton
          variant="success"
          id="dropdown-basic"
          className="bg-emerald-700"
          defaultValue={"ancla"}
          onSelect={handleSelectAccesorio}
        >
          {accesorios.map((accesorio) => (
            <Dropdown.Item eventKey={accesorio.nombre}>
              {accesorio.nombre}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Dropdown>
      <FormControl
        type="text"
        placeholder="Accesorio"
        className="border-2 w-full p-2 mt-2"
        value={valueAccesorio}
        defaultValue={valueAccesorio}
        onChange={funcionCambio(valueAccesorio)}
        required
      />
    </Form.Group>
  );
};
