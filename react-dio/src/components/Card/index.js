import { useState } from "react";

const Card = () => {
    const [valor, setValor] = useState(0)

    function Add () {
        setValor(valor + 1)
    }
    function Remove () {
        setValor(valor - 1)
    }
    

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro Card
            </div>
            <div className="card-body">
            <button 
                type="button" 
                className="btn btn-success"
                onClick={Add}>Add
            </button>

            <button 
                type="button" 
                className="btn btn-success"
                onClick={Remove}>Remove
            </button>
            <p>{valor}</p>
            
            </div>
        </div>
    )
}

export default Card;