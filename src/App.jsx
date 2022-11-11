import React, {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'

import jokefacade from "./facades/jokeFacade.js";
import userfacade from "./facades/userFacade.js";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Jokes from "./components/Jokes.jsx";
import CreateUser from "./components/CreateUser.jsx";
import CreateUserConfirmation from "./components/CreateUserConfirmation.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import Profile from "./components/Profile.jsx";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (userfacade.getToken()) setLoggedIn(true);
    }, []);

    return (
        <Container>
            <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} facade={userfacade}/>

            <Routes>
                <Route path="/" element={<Home title="Course Assignment 2"/>}/>
                <Route path="jokes" element={<Jokes facade={jokefacade}/>}/>
                <Route path="adminpanel" element={<AdminPanel/>}/>

                <Route path="createuser" element={<CreateUser/>}/>
                <Route path="createuserconfirmation" element={<CreateUserConfirmation/>}/>
                <Route path="profile" element={<Profile/>}/>

                <Route path="*" element={<h1>Page Not Found!!!</h1>}/>


            </Routes>

        </Container>
    )
}

export default App
