import React from "react"
import { FruitProvider } from "./context"
import FruitForms from "./fruitForms"
import FruitTable from "./fruitTable"

const Fruit = () => {
    return (
        <div className="App">
            <FruitProvider>
                <FruitTable />
                <FruitForms />
            </FruitProvider>
        </div>
    )
}

export default Fruit