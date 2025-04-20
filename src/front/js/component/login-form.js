import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickSubmit = async (event) => {
        event.preventDefault();
        const success = await actions.handleLogin(email, password);
        if (success) {
            alert("Logged in successfully!");
            // optionally: navigate to homepage or dashboard
            // navigate("/dashboard"); (if using useNavigate)
        } else {
            alert("Login failed. Please check your credentials.");
        }
    };    

    return (
        <>
            <h2>Login with Email</h2>

            <form className="mb-3" onSubmit={handleClickSubmit}>
                <div className="user-box">
                    <input type="email" required value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="user-box">
                    <input type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="col-12 btn button-accent rounded-pill pt-3 pb-3">Login</button>
            </form>
            <div className="d-flex justify-content-between">
                <span>
                    <Link className="text-decoration-none text-muted" to={"/signup"}>No account? Sign Up</Link>
                </span>
                <span>
                    <Link className="text-decoration-none text-muted" to={"/reset-request"}>Forgot Password?</Link>
                </span>
            </div>
        </>
    );
};