import React, { useEffect, useContext } from "react";
import axios from "axios";
import { FruitContext } from "./context";

const FruitForms = () => {
    const [fruit, setFruit, inputId, setInputId, inputName, setInputName, inputPrice, setInputPrice, inputWeight, setInputWeight] = useContext(FruitContext)

    const handleChangeName = (event) => {
        setInputName(event.target.value)
    }

    const handleChangePrice = (event) => {
        setInputPrice(event.target.value)
    }

    const handleChangeWeight = (event) => {
        setInputWeight(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let newName = event.target.name.value
        let newPrice = event.target.price.value
        let newWeight = event.target.weight.value
        let id = event.target.id.value
        
        if (id === "") {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {
                name: newName,
                price: newPrice,
                weight: newWeight
            })
                .then(res => {
                    setFruit([...fruit, {
                        id: res.data.id,
                        name: res.data.name,
                        price: res.data.price,
                        weight: res.data.weight
                    }])
                })
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${id}`, {
                name: newName,
                price: newPrice,
                weight: newWeight
            })
                .then(res => {
                    setFruit([...fruit, {
                        id: res.data.id,
                        name: res.data.name,
                        price: res.data.price,
                        weight: res.data.weight
                    }])
                })
        }

        setInputId("")
        setInputName("")
        setInputPrice("")
        setInputWeight("")
    }

    useEffect(() => {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setFruit(res.data.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        weight: item.weight
                    }
                }))
            })
    }, [fruit, setFruit])

    return (
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
            <input hidden="true" name="id" value={inputId} />
            <div className="form-group">
                <div className="label"><b>Name Fruit</b></div>
                <input className="field" type="text" name="name" required onChange={handleChangeName} value={inputName} />
            </div>
            <div className="form-group">
                <div className="label"><b>Price</b></div>
                <input className="field" type="text" name="price" required onChange={handleChangePrice} value={inputPrice} />
            </div>
            <div className="form-group">
                <div className="label"><b>Weight</b></div>
                <input className="field" type="text" name="weight" required onChange={handleChangeWeight} value={inputWeight} />
            </div>
            <input className="form-button" type="submit" value="Submit" />
        </form>
    );
}

export default FruitForms;