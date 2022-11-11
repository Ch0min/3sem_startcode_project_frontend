import React from "react";
import userfacade from "../facades/userFacade.js";

function WelcomeMessage() {
    return (
        <div>
            <br/>
            <h3>Welcome {userfacade.getUsername()}, you've now logged in!</h3>
        </div>
    )
}

export default WelcomeMessage