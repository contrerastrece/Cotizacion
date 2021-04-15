import { TransitionGroup, CSSTransition } from "react-transition-group";

const Resultado = ({ precio }) => {
  const resultado=precio;
  const mensaje=(!resultado)?"Elja una marca, Año y Tipo de Seguro":"El total es $"
  return (
    <div className="gran-total">
      {mensaje}
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={resultado}
          timeout={{ enter: 500, exit: 500 }}
        >
          <span>{precio}</span>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Resultado;
