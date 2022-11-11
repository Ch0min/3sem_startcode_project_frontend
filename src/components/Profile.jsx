import React, {useEffect, useState} from 'react';
import userfacade from "../facades/userFacade.js";
import button from "bootstrap/js/src/button.js";


function Profile() {

    function getRandomPicture(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    const avatar = `https://picsum.photos/id/${getRandomPicture(1, 200)}/100`

    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>PROFILE PICTURE</th>
                    <th>USERNAME</th>
                    <th>ROLE</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src={avatar}/>
                        </td>

                        <td>{userfacade.getUsername()}</td>
                        <td>{userfacade.getUserRoles()}</td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}


export default Profile;