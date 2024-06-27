import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';

export const SignupForm = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClickSubmit = (event) => {
        actions.handleSignup(email, password);
        event.preventDefault()
    };

    return (
        <>
            <h2>Sign up to Chef-Dojo</h2>

            <form className="mb-3" onSubmit={handleClickSubmit}>
                <div className="user-box">
                    <input type="email" required value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="user-box">
                    <input type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="col-12 btn button-accent rounded-pill pt-3 pb-3">Signup</button>
            </form>
            <div className="d-flex justify-content-center">
                <span>
                    <Link className="text-decoration-none text-muted" to={"/login"}>Already have an account? Log In</Link>
                </span>
            </div>
        </>
    );
};