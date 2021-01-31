import React, { useState } from "react";
import './converter.css';
function Converter() {
    const [result, setResult] = useState(0);
 
    const submitHandler = async (e) => {
    e.preventDefault();

    const [input, option] = e.target.elements;
    const API = `http://api.nbp.pl/api/exchangerates/rates/a/${option.value}/?format=json`;
    const response = await fetch(API);
    const data = await response.json();
    const result = Math.round(data.rates[0].mid * input.value);
    setResult(result);
};
    return (
    <div>
        <h1>Converter</h1>
        <form onSubmit={(e) => submitHandler(e)}>
        <input type='number' />
        <select>
            <option value='EUR'>EUR</option>
            <option value='USD'>USD</option>
            <option value='CHF'>CHF</option>
        </select>
        <button>Convert</button>
        </form>
        <div id='output'><b>{result} PLN</b></div>
    </div>
    );
}

export default Converter;