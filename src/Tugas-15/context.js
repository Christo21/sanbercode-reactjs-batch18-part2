import React, { useState, createContext } from "react";

export const RouteContext = createContext([]);

export const RouteProvider = props => {
    const [name, setName] = useState("Dark");
    const [background, setBackground] = useState("#eeeedd")
    const [color, setColor] = useState("#333333")

    return (
        <RouteContext.Provider value={[name, setName, background, setBackground, color, setColor]}>
            {props.children}
        </RouteContext.Provider>
    );
};