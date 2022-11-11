import userfacade from "../facades/userFacade.js";
import {useNavigate} from "react-router-dom"

function LoggedIn({setLoggedIn}) {
    const navigate = useNavigate()

    const logout = () => {
        userfacade.logout()
        setLoggedIn(false)
        navigate("/")
    }

    return (

        <div className="logout-container">
            <button onClick={logout}>Log out</button>
        </div>

    )
}

export default LoggedIn