//para que no see cree un div mas encima
import {Fragment} from 'react'
//<Fragment></Fragment>

const newMessage = {
    message: ' Hola mundo ',
    title: 'Fernando '
}

const SentMessage  = () =>{
    const message = "Hola mundo"
    return message
}

export const FirstApp = () => {
    
    
    //recuerda que el h1 entre {} no puedes
    // mandar un objeto como tal
    return (
        <>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <h1>{ SentMessage() }</h1>
            <p>Soy un subtitulo</p>
        </>
    );
}