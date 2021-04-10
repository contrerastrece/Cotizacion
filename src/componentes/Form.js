import React, { useRef } from "react";

export default function Form({cotizarSeguro}) {
  // refs son para ller los valores de los campos de un formulario
  let marcaRef = useRef();
  let yearRef = useRef();
  let planBasicRef = useRef();
  let planCompleteRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Enviado");
    // obtener los datos
    console.log(marcaRef.current.value)
    // leer el plan
    const plan=planBasicRef.current.checked?"Basico":"Completo";

    // creal el objeto
    const infoAuto={
      marca:marcaRef.current.value,
      year:yearRef.current.value,
      plan:plan
    }
    // Enviarlo al componente principal
    cotizarSeguro(infoAuto);
    // resetar el Formulario(OPCIONAL)
    // e.currentTarget.reset();
  };

  return (
    <form className="cotizar-auto" onSubmit={handleSubmit}>
      <div className="campo">
        <label>Marca</label>
        <select name="marca" ref={marcaRef}>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </div>

      <div className="campo">
        <label>Año</label>
        <select name="year" ref={yearRef}>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
        </select>
      </div>
      <div className="campo">
        <label>Plan:</label>
        <input type="radio" name="plan" value="basico" ref={planBasicRef} /> Básico
        <input type="radio" name="plan" value="completo" ref={planCompleteRef}/> Completo
      </div>

      <button type="submit" className="boton">
        Cotizar
      </button>
    </form>
  );
}
