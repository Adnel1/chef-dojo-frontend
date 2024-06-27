import React, { useContext, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import { LoginForm } from "../component/login-form";
import { SignupForm } from "../component/signup-form";
import { PasswordResetForm } from "../component/password-reset-form";
import { PasswordChangeForm } from "../component/password-change-form";
import { BackButton } from "../component/back-button";
import Logo from "../../img/chef-dojo-logo.png";
import "../../styles/login.css";

export const Authentication = () => {
    const { store, actions } = useContext(Context);
    const forward = useNavigate();

    // Sends the user to their page if logged in
    useEffect(() => {
        if (store.token && store.token != "" && store.token != undefined) {
            forward("/user-home");
        }
    }, [store.token, forward]);

    return (
        <>
            <div className="d-flex vh-100">
                <div className="col-5 d-none d-md-flex justify-content-center align-items-center">
                    <video className="video" autoPlay loop muted="muted">
                        <source src="https://cdn.pixabay.com/video/2023/03/02/152834-804130720_large.mp4" type="video/webm" />
                    </video>
                </div>
                <div className="col-12 col-md-7 d-flex justify-content-center">
                    <div className="col-10 col-md-7 login-form">
                        <BackButton />
                        <div className="mb-5">
                            <Link to={"/"}>
                                <img src={Logo} style={{ width: '120px', height: 'auto' }} alt="Logo" />
                            </Link>
                        </div>
                        {location.pathname === "/login" ? (
                            <LoginForm />
                        ) : location.pathname === "/signup" ? (
                            <SignupForm />
                        ) : location.pathname === "/reset-request" ? (
                            <PasswordResetForm />
                        ) : location.pathname === "/change-password" ? (
                            <PasswordChangeForm />
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};
