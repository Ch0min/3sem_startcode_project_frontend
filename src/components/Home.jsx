import React from "react";
import {Outlet} from "react-router-dom";

function Home({title}) {
    return (
        <div>
            <br/>
            <h1>{title}</h1>
            <Outlet/>
        </div>
    )
}

export default Home
