import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import "../styles/header.css";

import Login from "./Login.jsx";
import LoggedIn from "./LoggedIn.jsx";
import CreateUserButton from "./CreateUserButton.jsx";

function Header({loggedIn, setLoggedIn, facade}) {

    return (
        <nav className="topnav">
            <NavLink className="active" to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
            <NavLink to="/jokes"><i className="fa fa-smile-o"></i> Jokes</NavLink>

            {facade.hasUserAccess('admin', loggedIn) &&
                (<NavLink to="adminpanel"><i className="fa fa-lock>"></i> Admin Panel</NavLink>)}

            {!loggedIn ? (<CreateUserButton/>) :
                (<></>)}

            {!loggedIn ? (<Login setLoggedIn={setLoggedIn}/>) :
                (<div>
                    <LoggedIn setLoggedIn={setLoggedIn}/>
                </div>)}

            {loggedIn ? (<NavLink className="profileIcon" to="profile"><i className="fa fa-user"></i>
                {"Profile: " + " " + facade.getUsername()}</NavLink>) : <></>}

        </nav>

    )
}

export default Header