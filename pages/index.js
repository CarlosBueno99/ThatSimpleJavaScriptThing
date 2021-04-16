import {useState} from 'react';

function Home(){
    return(
        <div>
            <h1>Eaí fiote!!</h1>
            <Contador />
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(0);

    function adcionarContador(){
        setContador(contador + 1);
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick={adcionarContador}>Adicionar Contador</button>
        </div>
    )
}



export default Home