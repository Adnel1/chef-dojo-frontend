import React, { useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes, useLocation, Link, useNavigate } from "react-router-dom";
import { BackendURL } from "./component/backendURL";
import { Navbar } from "./component/navbar";
import { Home } from "./pages/home";
import { UserHome } from "./pages/user-home";
import { ItemDetail } from "./pages/item-detail";
import { RecipeBoard } from "./pages/recipe-board";
import { RecipePage } from "./pages/recipe-page";
import { Authentication } from "./pages/authentication";
import { motion, AnimatePresence } from 'framer-motion';
import injectContext from "./store/appContext";

const LayoutContent = () => {
    const location = useLocation();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const renderNavbar = !["/login", "/signup", "/reset-request", "/change-password"].includes(location.pathname);

    const handleClose = () => {
        actions.setSearch(false);
    };

    const handleItemClick = (id) => {
        navigate(`/item-detail/${id}`);
        actions.setSearch(false);
    };

    return (
        <div>
            {renderNavbar && <Navbar />}
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<UserHome />} path="/user-home" />
                <Route element={<ItemDetail />} path="/item-detail/:id" />
                <Route element={<RecipeBoard />} path="/recipe-board/:id" />
                <Route element={<RecipePage />} path="/recipe-page/:id" />
                <Route element={<Authentication />} path="/signup" />
                <Route element={<Authentication />} path="/login" />
                <Route element={<Authentication />} path="/reset-request" />
                <Route element={<Authentication />} path="/change-password" />
                <Route element={<h1>Not found!</h1>} />
            </Routes>

            <AnimatePresence>
                {store.search && (
                    <motion.div
                        className="overlay"
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: '0' }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="close-item-list">
                            <button className="round-button-large mb-5" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                                </svg>
                            </button>
                        </div>
                        <div className="overlay-content">
                            <h2>Results</h2>
                            <div className="col-12 scrollable-section mb-5">
                                <ul className="list-group list-group-flush">
                                    {store.items.map((item, index) => (
                                        <li
                                            className="list-group-item d-flex justify-content-between align-items-center"
                                            key={index}
                                            onClick={() => handleItemClick(item.id)}
                                        >
                                            <span className="col-8">
                                                <Link to={`/item-detail/${item.id}`} className="link-hover">{item.name}</Link>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <BrowserRouter basename={basename}>
            <LayoutContent />
        </BrowserRouter>
    );
};

export default injectContext(Layout);
