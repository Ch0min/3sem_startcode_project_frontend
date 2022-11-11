import React from 'react';

const AdminPanelDelete = (props) => {

    const handleSubmitDelete = async (id) => {
        fetch('http://localhost:8080/api/info/user/' + id, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('DATA:', data);
                props.setUsers(props.users.filter((user) => user.id !== id))
            });
    }

    return (
        <>
            <input type="submit" value="-" onClick={(e) => handleSubmitDelete(props.user.id, e)}/>
        </>
    )
};


export default AdminPanelDelete