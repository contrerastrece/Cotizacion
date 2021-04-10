import { TransitionGroup, CSSTransition } from "react-transition-group";

const Resultado = ({ precio }) => {
  return (
    <>
      <div className="resultado">
        <TransitionGroup>
          <CSSTransition></CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};

export default Resultado;
