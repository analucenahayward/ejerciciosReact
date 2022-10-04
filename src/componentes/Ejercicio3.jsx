import { useState } from "react";

const Ejercicio3 = (props) => {

    const[msj, setMsj] = useState('');

    return (
        <>
        <h2>Hello {props.codigoAmigo}{msj}</h2>
        <button onClick={()=> setMsj('(from changed state)')}>Click me</button>
        </>
    );
};

export default Ejercicio3;