import React, { useState, useEffect } from "react";
import axios from "axios";

const Header = (props) => {
    return (
        <th>{props.item}</th>
    );
}

const Detail = (props) => {
    return (
        <td>{props.item}</td>
    );
}

const Hooks = () => {
    const [fruit, setFruit] = useState([])
    const [inputId, setInputId] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputWeight, setInputWeight] = useState("")
    const [index, setIndex] = useState(-1)

    const handleEdit = (event) => {
        let index = event.target.value
        setInputId(fruit[index].id)
        setInputName(fruit[index].name)
        setInputPrice(fruit[index].price)
        setInputWeight(fruit[index].weight)
        setIndex(index)
    }

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
        let newId = fruit.length + 1

        if (index < 0) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {
                id: newId,
                name: newName,
                price: newPrice,
                weight: newWeight
            })
                .then(res => {
                    setFruit([...fruit, {
                        id : res.data.id,
                        name : res.data.name,
                        price : res.data.price,
                        weight : res.data.weight
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
                        id : res.data.id,
                        name : res.data.name,
                        price : res.data.price,
                        weight : res.data.weight
                    }])
                })
        }

        setInputName("")
        setInputPrice("")
        setInputWeight("")
        setIndex(-1)
    }

    const handleDelete = (event) => {
        let id = event.target.value

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                setFruit([...fruit, {
                    id : res.data.id,
                    name : res.data.name,
                    price : res.data.price,
                    weight : res.data.weight
                }])
            })
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
    },[fruit])

    return (
        <div className="App">
            <h1 style={{ marginTop: "10px" }}>Tabel Price Fruit</h1>
            <table>
                <thead>
                    <tr id="header">
                        <Header id="name" item="Name" />
                        <Header id="price" item="Price" />
                        <Header id="weight" item="Weight" />
                        <Header id="edit" item="Edit" />
                        <Header id="delete" item="Delete" />
                    </tr>
                </thead>
                <tbody>
                    {fruit.map((el, index) => {
                        return (
                            <>
                                <tr>
                                    <Detail item={el.name} />
                                    <Detail item={el.price} />
                                    <Detail item={el.weight / 1000 + " kg"} />
                                    <td><button value={index} onClick={handleEdit}>Edit</button></td>
                                    <td><button value={el.id} onClick={handleDelete}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            <br />
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
        </div>
    );
}

export default Hooks;