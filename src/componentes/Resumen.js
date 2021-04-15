import { primeraMayuscula } from "../helpers";

const Resumen = ({ info }) => {
  const mostrarResumen = () => {
    const { marca, year, plan } = info;
    if (!marca || !year || !plan) return null;
    return (
      <>
        <div className="resumen">
          <h2>Resumen de Cotización</h2>
          <li>Marca:{primeraMayuscula(marca)}</li>
          <li>Año:{primeraMayuscula(year)}</li>
          <li>Plan:{plan}</li>
        </div>
      </>
    );
  };

  return <>{mostrarResumen()}</>;
};

export default Resumen;