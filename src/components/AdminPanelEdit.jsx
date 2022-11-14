import React, {useState} from 'react';
import Select from 'react-select'
import userfacade from "../facades/userFacade.js";

const AdminPanelEdit = () => {

    const init = {id: "", userName: "", userPass: "", role: ""};
    const [updatedUser, setUpdatedUser] = useState(init);
    const [hidden, setHidden] = useState(true)

    const performUpdateUser = () => {
        updateUser(updatedUser.userName, updatedUser.userPass, updatedUser.role, updatedUser.id);
    }

    const updateUser = (user, password, role, id) => {
        userfacade.updateUser(user, password, role, id)
    }

    const update = (evt) => {
        setUpdatedUser({...updatedUser, [evt.target.id]: evt.target.value})
        console.log(updatedUser)
    }

    const btnText = () => {
        if (hidden) {
            return "Edit User"
        } else
            return "Close"
    }

    return (
        <>
            <br/>
            <button className="btn-close-white" onClick={() => setHidden(s => !s)}>{btnText()}</button>
            {!hidden ? <form onSubmit={performUpdateUser}>
                <br/>
                <label>ID: </label>
                <input type="number" id="id" value={updatedUser.id} onChange={update}/>
                <br/>
                <label>Username: </label>
                <input type="text" id="userName" value={updatedUser.userName} onChange={update}/>
                <br/>
                <label>Password: </label>
                <input type="text" id="userPass" value={updatedUser.userPass} onChange={update}/>
                <br/>
                <label>Role: </label>
                <input type="text" id="role" value={updatedUser.role} onChange={update}/>
                <br/>

                <input type="submit" value="Update"/>
            </form> : null}
        </>
    )
}


export default AdminPanelEdit