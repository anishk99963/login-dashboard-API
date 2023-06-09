import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: email, password: password })
            })
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                window.location.href = '/dashboard';
            } else {
                alert('Invalid email or password.');
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
