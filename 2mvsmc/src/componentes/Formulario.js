import React from "react";
import Input from "./Input";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materia: "",
      docente: "",
      horas: "",
      codigo: ""
    };
  }
  render() {
    return (
      <div className="Formulario">
        <label>
          {" "}
          <Input titulo="materia" />
        </label>
        <label>
          {" "}
          <Input titulo="docente" />
        </label>
        <label>
          {" "}
          <Input titulo="horas" />
        </label>
        <label>
          {" "}
          <Input titulo="codigo" />
        </label>
      </div>
    );
  }
}
