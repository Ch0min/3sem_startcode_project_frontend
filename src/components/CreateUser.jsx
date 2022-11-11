import React, {useState} from 'react';
import userfacade from "../facades/userFacade.js";
import {useNavigate} from "react-router-dom";

function CreateUser() {
    const navigate = useNavigate()

    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performCreate = (evt) => {
        evt.preventDefault();
        createUser(loginCredentials.username, loginCredentials.password);
        navigate("/createuserconfirmation")
    }

    const createUser = (user, pass) => {
        userfacade.createUser(user, pass)
    }

    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }

    return (
        <div className="login-container">
            <br/>
            <h5>Create User</h5>
            <form >
                <input onChange={onChange} placeholder="Username" id="username" />{" "}
                <input onChange={onChange} placeholder="Password" id="password" />
                <button onClick={performCreate} type="submit">Create User</button>
            </form>
        </div>
    )
}

export default CreateUser