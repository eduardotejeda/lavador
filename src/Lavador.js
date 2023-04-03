import { useState } from 'react';
import imgPerfil from './images/imgperfil.jpg'

function Lavador() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);

    };

    const handleRemoveClick = () => {
        setCount(count - 1);

    };
    
    return <div>      
    
    <img src={imgPerfil} className='perfil' alt='imagend de perfil'/>
    <h1>Frankely </h1>
    <h2>Total car washed: {count}</h2>
    <button onClick={handleClick}>Add car</button>
    <button onClick={handleRemoveClick}>Remove car</button>
    </div>
}

export default Lavador;

//Foto y nombre del lavador