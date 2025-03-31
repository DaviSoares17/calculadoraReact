import React, {useState, useEffect} from "react";
import "./Calculadora.css"

const Calculadora = () => {


    const [displayValue, setDisplayValue] = useState("");
    const [operator, setOperator] = useState("");
    const [firstValue, setFirstValue] = useState(0);




    const handleChange = (event) => {
        setDisplayValue(event.target.value);
    }

    function updateNumber(number) {
        let num = displayValue + number;
        setDisplayValue(num);
    }

    function updateOperator(opera) {
        setOperator(opera);
        setFirstValue(displayValue);
        setDisplayValue("");
    }

    function clearValues() {
        setDisplayValue("");
        setFirstValue(0);
        setOperator("");
    }


    function realizaCalculo() {
        let finalValue = 0;
        if(operator == "+"){
            finalValue = parseInt(displayValue) + parseInt(firstValue);
        }else if(operator == "-"){
            finalValue = parseInt(firstValue) - parseInt(displayValue);
        }else if(operator == "x"){
            finalValue = parseInt(displayValue) * parseInt(firstValue);
        }else{
            finalValue = parseInt(firstValue) / parseInt(displayValue);
        }
        setDisplayValue(finalValue);
    }


    return(
        <div className="corpo">
            <div>
                <input readOnly value={displayValue} onChange={handleChange}></input>
            </div>
            <div className="botoes">
                <button className="botao-numerico" onClick={() => updateNumber(1)}>1</button>
                <button className="botao-numerico" onClick={() => updateNumber(2)}>2</button>
                <button className="botao-numerico" onClick={() => updateNumber(3)}>3</button>
                <button className="botao-mais" onClick={() => updateOperator("+")}>+</button>
                <button className="botao-numerico" onClick={() => updateNumber(4)}>4</button>
                <button className="botao-numerico" onClick={() => updateNumber(5)}>5</button>
                <button className="botao-numerico" onClick={() => updateNumber(6)}>6</button>
                <button className="botao-menos" onClick={() => updateOperator("-")}>-</button>
                <button className="botao-numerico" onClick={() => updateNumber(7)}>7</button>
                <button className="botao-numerico" onClick={() => updateNumber(8)}>8</button>
                <button className="botao-numerico" onClick={() => updateNumber(9)}>9</button>
                <button className="botao-vezes" onClick={() => updateOperator("x")}>x</button>
                <button className="botao-numerico" onClick={realizaCalculo}>=</button>
                <button className="botao-numerico" onClick={() => updateNumber(0)}>0</button>
                <button className="botao-numerico" onClick={clearValues}>C</button>
                <button className="botao-dividir" onClick={() => updateOperator("/")}>/</button>
            </div>
            

        </div>
    )
}

export default Calculadora