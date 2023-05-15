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
  import { usePulseras } from "@/context/PulserasContext";
  import "bootstrap/dist/css/bootstrap.min.css";
  export const DropdownComponentPulsera = ({funcionCambio}) => {
    const { pulseras } = usePulseras();
    const [valuePulsera, setValuePulsera] = useState("");
    const handleSelectModelo = (e) => {
      console.log(e);
      setValuePulsera(e);
    };

    return (
      <Form.Group controlId="exampleForm.SelectCustom">
        <Dropdown>
          <DropdownButton
            variant="success"
            id="dropdown-basic"
            className="bg-emerald-700"
            defaultValue={"ancla"}
            onSelect={handleSelectModelo}
          >
            {pulseras.map((pulsera) => (
              <Dropdown.Item eventKey={pulsera.nombre}>
                {pulsera.nombre}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Dropdown>
        <FormControl
          type="text"
          placeholder="Modelo"
          className="border-2 w-full p-2 mt-2"
          value={valuePulsera}
          defaultValue={valuePulsera}
          onChange={funcionCambio(valuePulsera)}
        />
      </Form.Group>
    );
  };
  