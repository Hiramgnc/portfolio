import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import "./FormStyles.css";

const Form = () => {
    const [state, handleSubmit] = useForm("xjvzlqld");
        if (state.succeeded) {
            return <p>Gracias por escribir!</p>;
        }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Nombre Y Apellido</label>
                <input type="text" placeholder="Juan Perez"></input>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"required placeholder="juan@gmail.com"></input>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            
                <label>Asunto</label>
                <input type="text"></input>

                <label>Mensaje</label>
                <textarea id="message" name="message" rows="6" placeholder="Escriba aqui su mensaje..." />
                <ValidationError prefix="Message" field="message" errors={state.errors}/>

                <button className="btn" type="submit" disabled={state.submitting}>Enviar</button>
            </form>
        </div>
    )
}

export default Form;