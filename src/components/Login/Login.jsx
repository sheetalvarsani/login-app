import React, { useState } from 'react';

// Function to handle user login:
const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (username.trim() !== '' && password.trim() === 'password') {
            onLogin(username);
            setLoginFailed(false);
        } else {
            onLogin('');
            setLoginFailed(true);
        }
    };

    return (
        <div className="Login-Form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
