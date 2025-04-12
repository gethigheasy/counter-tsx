import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const zerarValor = 0;

  if (contador < 0) {
    setContador(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button
        onClick={() => setContador(contador - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrementar
      </button>
      <button
        onClick={() => setContador(zerarValor)}
        style={{ marginLeft: "10px" }}
      >
        Zerar Contador
      </button>
    </div>
  );
}

export default App;
