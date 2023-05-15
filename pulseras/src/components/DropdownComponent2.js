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
  export const DropdownComponent2 = ({funcionCambio}) => {
    const [valueColor, setValueColor] = useState("");
    const handleSelectColor = (e) => {
      console.log(e);
      setValueColor(e);
    };
  const colores = [
{    nombre:"Azul Cielo"},
{    nombre:"Rojo"},
{    nombre:"Rosa Pastel",},
{    nombre:"Amarillo",},
{    nombre:"Verde",},
{    nombre:"Aqua",},
{    nombre:"Lila",},
{    nombre:"Negro",},
{    nombre:"White"}
  ]
    return (
      <Form.Group controlId="exampleForm.SelectCustom">
        <Dropdown>
          <DropdownButton
            variant="success"
            id="dropdown-basic"
            className="bg-emerald-700"
            defaultValue={"ancla"}
            onSelect={handleSelectColor}
          >
            {colores.map((color) => (
              <Dropdown.Item eventKey={color.nombre}>
                {color.nombre}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Dropdown>
        <FormControl
          type="text"
          placeholder="Color"
          className="border-2 w-full p-2 mt-2"
          value={valueColor}
          defaultValue={valueColor}
          onChange={funcionCambio(valueColor)}
        />
      </Form.Group>
    );
  };
  