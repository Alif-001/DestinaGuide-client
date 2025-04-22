import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const user = useContext(AuthContext);
    console.log(user); 
    return (
        <div>
            <h1>Login page</h1>
        </div>
    );
};

export default Login;