import React from 'react';

const Form = (props) => {
    return (
        <>
        <form className="class-form">
            <label htmlFor="class">Wybierz swoją klasę: </label>
            <select id="class" className="class-select" defaultValue={props.selectValue} onChange={props.handleSelectForm}>
                <option value="0">Wybierz klasę..</option>
                <option value="ti2">2 TI</option>
                <option value="ti3">3 TI</option>
                <option value="ti4">4 TI</option>
            </select>
        </form>
        <button className="class-button" onClick={props.handleButtonClick}>Generuj pytania</button>
        </>
    );
}

export default Form;