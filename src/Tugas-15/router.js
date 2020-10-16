import React, { useContext } from "react";
import { RouteContext } from "./context";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import FruitForms from '../Tugas-9/forms';
import Table from "../Tugas-10/table";
import Timer from '../Tugas-11/timer';
import Forms from '../Tugas-12/forms';
import Hooks from '../Tugas-13/hooks';
import Fruit from '../Tugas-14/fruit';

const Routes = () => {
    const [name, setName, background, setBackground, color, setColor] = useContext(RouteContext)

    const switchThemes = () => {
        if(name === "Dark"){
            setName("Light")
            setBackground("#333333")
            setColor("#eeeedd")
        } else {
            setName("Dark")
            setColor("#333333")
            setBackground("#eeeedd")
        }
    }

    return (
        <Router>
            <div>
                <nav>
                    <ul className="nav" style={{backgroundColor: background}}>
                        <li>
                            <a className="link" onClick={switchThemes} style={{color: color}}>Switch to {name} Theme</a>
                        </li>
                        <li>
                            <Link className="link" to="/Tugas-9" style={{color: color}}>Tugas-9</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Tugas-10" style={{color: color}}>Tugas-10</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Tugas-11" style={{color: color}}>Tugas-11</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Tugas-12" style={{color: color}}>Tugas-12</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Tugas-13" style={{color: color}}>Tugas-13</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Tugas-14" style={{color: color}}>Tugas-14</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Tugas-9">
                        <FruitForms />
                    </Route>
                    <Route path="/Tugas-10">
                        <Table />
                    </Route>
                    <Route path="/Tugas-11">
                        <Timer />
                    </Route>
                    <Route path="/Tugas-12">
                        <Forms />
                    </Route>
                    <Route path="/Tugas-13">
                        <Hooks />
                    </Route>
                    <Route path="/Tugas-14">
                        <Fruit />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes