//para que no see cree un div mas encima
import {Fragment} from 'react'
//<Fragment></Fragment>

const newMessage = {
    message: ' Andres ',
    title: 'Fernando '
}

const SentMessage  = () =>{
    const message = "Andres"
    return message
}
// Componente
export const FirstApp = ( {title="Andres Galvan"} ) => {
    
    console.log(props);
    //recuerda que el h1 entre {} no puedes
    // mandar un objeto como tal
    return (
        <>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <h1>Hola</h1>
            <p>Soy un subtitulo</p>
        </>
    );
}