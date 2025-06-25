import './Navigation.css'
import logo from "/src/assets/logo.svg"
import currentDate from "../../helpers/currentDate.js";
import {NavLink} from "react-router-dom";

function Navigation() {
    const date = currentDate();
    return (
        <>
            <img src={logo} alt="logo" className="logo" />
            <p>{date}</p>
            <p>ingelogd als: gebruiker</p>
            <div className="menu">
                <NavLink to="/">Overzicht</NavLink>
                <NavLink to="/rack/:id">Rek</NavLink>
                <NavLink to="/shelf">Vak</NavLink>
                <NavLink to="/log">Logboek</NavLink>
            </div>
            <p>uitloggen</p>
        </>

    )
}
export default Navigation