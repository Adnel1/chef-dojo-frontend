import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { SearchBar } from "../component/search-bar";
import Logo from "../../img/chef-dojo-logo.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar bg-white pt-4 pb-4 mb-5 drop-shadow">
			<div className="container">
				<div className="col-12 col-lg-auto text-center mb-3 mb-lg-0">
					<Link to={"/"}>
						<img src={Logo} />
					</Link>
				</div>

				<div className="col-12 col-lg-5 text-center mb-3 mb-lg-0">
					<SearchBar />
				</div>

				<div className="col-12 col-lg-auto d-flex justify-content-center">
					{!store.token ? (
						<>
							<div className="Login-Button">
								<Link to={"/login"} className="btn button-default rounded-pill me-3" href="/login">Log In</Link>
							</div>
							<div className="Signup-Button">
								<Link to={"/signup"} className="btn button-accent rounded-pill">Sign Up</Link>
							</div>
						</>
					) : (
						<button onClick={() => actions.handleLogout()} className="btn button-default rounded-pill">
							Logout
						</button>
					)}
				</div>

			</div>
		</nav>
	);
};
