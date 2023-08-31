import React from "react";
import "./styles.css";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="contenedor">
        <Header />
        <div className="cuerpo">
          <Formulario />
          <Listado />
        </div>
        <Footer />
      </div>
    );
  }
}
