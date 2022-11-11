import React, {useState} from 'react';
import userfacade from "../facades/userFacade.js";


function Login({setLoggedIn}) {

    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }

    const login = (user, pass) => {
        userfacade.login(user, pass)
            .then(res => setLoggedIn(true));
    }

    const onChange = (evt) => {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }

    return (
        <div className="login-container">
            <form >
                <input onChange={onChange} placeholder="Username" id="username" />{" "}
                <input onChange={onChange} placeholder="Password" id="password" />
                <button onClick={performLogin} type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login