import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

export const PasswordChangeForm = () => {
    const [searchParams] = useSearchParams();
    const { store, actions } = useContext(Context);
    const [password, setPassword] = useState("");
    const forward = useNavigate();

    // Sends the user to their page if logged in
    useEffect(() => {
        const token = searchParams.get("token")
        if (!token) {
            forward("/");
        }
    }, []);

    const handleClickSubmit = (event, password) => {
        event.preventDefault();
        actions.handlePasswordChange(password, searchParams.get("token"))
        // Add logic to handle password change here
    };

    return (
        <>
            <h2>Set New Password</h2>

            <form className="mb-3" onSubmit={(e) => handleClickSubmit(e, password)}>
                <div className="user-box">
                    <input type="password" required value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="col-12 btn button-accent rounded-pill pt-3 pb-3">Confirm New Password</button>
            </form>
        </>
    );
};