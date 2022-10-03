import Ejercicio1 from "./componentes/Ejercicio1";
import Ejercicio2 from "./componentes/Ejercicio2";


function App() {
  //aqui va la mayoria de la logica
const amigo = 'my friend!' ;


  return (
    <>
    <Ejercicio1></Ejercicio1>
    <Ejercicio2 codigoAmigo={amigo} estado={true}></Ejercicio2>
    </>
  );
}

export default App;
