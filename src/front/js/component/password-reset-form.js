import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

export const PasswordResetForm = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const forward = useNavigate();
    const [hasError, setHasError] = useState(false);

    const handleClickSubmit = async (event) => {
        event.preventDefault();
        const success = await actions.handlePasswordReset(email);
        if (success) {
            forward("/login");
            setHasError(false);
        } else {
            // Handle the error case (e.g., show an error message to the user)
            console.error("Password reset request failed");
            setHasError(true);
        }
    };

    return (
        <>
            <h2>Reset Password Request</h2>
            <p className="form-text text-muted">Please type in your email and we'll send you and email with a link to reset your password.</p>
            <form className="mb-3" onSubmit={handleClickSubmit}>
                <div className="user-box">
                    <input type="email" required value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {hasError &&
                    <p className="form-text text-danger">There was an error please try again</p>
                }
                <button type="submit" className="col-12 btn button-accent rounded-pill pt-3 pb-3">Send</button>
            </form>
        </>
    );
};