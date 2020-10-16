import React from "react"
import { Route } from "react-router-dom/cjs/react-router-dom.min"
import { RouteProvider } from "./context"
import Routes from "./router"

const Routing = () => {
    return (
        <RouteProvider>
            <Routes />
        </RouteProvider>
    )
}

export default Routing