import React from "react";
import useResources from "./useResources";

const UserList = () => {
    const users = useResources("users");

    return (
        <ul>
            {users.map(user => {
                return <li key={user.name}>{user.name}</li>;
            })}
        </ul>
    );
};

export default UserList;
