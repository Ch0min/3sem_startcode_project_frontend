import React from "react";
import {Outlet} from "react-router-dom";

function Home({title}) {
    return (
        <div>
            <br/>
            <h2>{title}</h2>
            <p>This is our course assignment project, where we learn to use both backend and frontend programming.</p>
            <Outlet/>
        </div>
    )
}

export default Home
