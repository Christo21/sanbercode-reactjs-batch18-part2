import React, { useContext } from "react";
import { FruitContext } from "./context";
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

const FruitTable = () => {
    const [fruit, setFruit, , setInputId, , setInputName, , setInputPrice, , setInputWeight] = useContext(FruitContext)

    const handleEdit = (event) => {
        let id = parseInt(event.target.value)
        let fruitEdit = fruit.find(item => item.id === id)
        
        setInputId(fruitEdit.id)
        setInputName(fruitEdit.name)
        setInputPrice(fruitEdit.price)
        setInputWeight(fruitEdit.weight)
    }

    const handleDelete = (event) => {
        let id = event.target.value

        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
            .then(res => {
                setFruit([...fruit, {
                    id: res.data.id,
                    name: res.data.name,
                    price: res.data.price,
                    weight: res.data.weight
                }])
            })
    }

    return (
        <>
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
                    {fruit.map(el => {
                        return (
                            <>
                                <tr>
                                    <Detail item={el.name} />
                                    <Detail item={el.price} />
                                    <Detail item={el.weight / 1000 + " kg"} />
                                    <td><button value={el.id} onClick={handleEdit}>Edit</button></td>
                                    <td><button value={el.id} onClick={handleDelete}>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default FruitTable