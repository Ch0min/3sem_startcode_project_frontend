import React from 'react';
import {useNavigate} from "react-router-dom";

function CreateUserButton() {
    const navigate = useNavigate()


    return (
        <div className="create-user-container">
            <button onClick={() => navigate("/createUser")}>Create User</button>

        </div>
    );
}

export default CreateUserButton;