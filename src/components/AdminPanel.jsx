import React, {useState, useEffect} from 'react';
import AdminPanelEdit from "./AdminPanelEdit.jsx";
import AdminPanelDelete from "./AdminPanelDelete.jsx";

function AdminPanel() {
    const [users, setUsers] = useState([]);

    useEffect(() => {(
            async () => {
                const response = await fetch('http://localhost:8080/api/info/all');
                const data = await response.json();
                setUsers(data);
            })();
    }, []);

    return (
        <>
            <br/>
            {users.length &&
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>ROLE</th>
                    <th>MANAGE</th>
                </tr>
                </thead>
                <tbody>{users.map((user) => {
                    return (<tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.roles}</td>
                            <td>
                                <AdminPanelDelete user={user} users={users} setUsers={setUsers}/>
                            </td>

                        </tr>
                    );
                })}
                </tbody>
            </table>
            }
            <AdminPanelEdit/>
        </>
    );
}

export default AdminPanel