import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyTask = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>This is My Task Section</h1>
            <h1>{user?.displayName}</h1>
        </div>
    );
};

export default MyTask;