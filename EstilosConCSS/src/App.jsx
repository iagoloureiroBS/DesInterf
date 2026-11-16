import Tarxeta from "./Tarxeta.jsx";
import Aviso from "./Aviso.jsx";
import Produto from "./Produto.jsx";

export default function App() {
  return (
    <>
      <Tarxeta />
      <Aviso />
      <Produto nome="Messi" prezo="10" />
    </>
  );
}
