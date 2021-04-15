import "../App.css";
import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import { calcularMarca, obtenerDiferenciaAnio, obtenerPlan } from "../helpers";
import Resumen from "./Resumen";
import Resultado from "./Resultado";

function App() {
  const [precio, setPrecio] = useState("");
  const [dato, setDato] = useState({});

  let cotizarSeguro = (datos) => {
    const { marca, year, plan } = datos;
    // Agregar una base de 2000
    let resultado = 2000;
    // Obtener la diferencia de Años
    const diferencia = obtenerDiferenciaAnio(year);
    // por cada año restar el 3% al valor del seguro
    resultado = resultado - (diferencia * 3 * resultado) / 100;
    // Americano 15% asiatico 5% y Europeo 30% del incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
    // plan del auto básico incremente el valor del 20% del
    // y cobertura completa el 50%
    let incrementoPlan = obtenerPlan(plan);
    // dependiendo el plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    console.log(incrementoPlan);
    console.log(resultado);      
    // crear objeto para el resumen
    const datosAuto={
      marca,
      plan,
      year
    }
    // ya tenemos el costo
      setPrecio(resultado);
      setDato(datosAuto)
  };
  return (
    <div className="contenedor">
      <Header title="Cotizador" />
      <div className="contenedor-formulario">
        <Form cotizarSeguro={cotizarSeguro} />
        <Resumen
        info={dato}
        />
        <Resultado
        precio={precio}
        />
      </div>
    </div>
  );
}

export default App;
