import React, { useState, createContext } from "react";

export const FruitContext = createContext();

export const FruitProvider = props => {
    const [fruit, setFruit] = useState([]);
    const [inputId, setInputId] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputWeight, setInputWeight] = useState("")

    return (
        <FruitContext.Provider value={[fruit, setFruit, inputId, setInputId, inputName, setInputName, inputPrice, setInputPrice, inputWeight, setInputWeight]}>
            {props.children}
        </FruitContext.Provider>
    );
};