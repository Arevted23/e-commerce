import { StrictMode } from "react";
import { createRoot } from "react-dom/client"

// crear NombredeEseAlgo = () => {}
const ButtonCrearCuenta = () => {
  //Escribe tu codigo aqui
  <>
    <div>Aqui escribe el codigo...</div>
    <div>Crea una</div>
  </>;
};

// Exportar el componente
export default ButtonCrearCuenta;
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonCrearCuenta />
  </StrictMode>
);
