import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Reg from "./Reg";
import Main from "./Main"
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Main />} />
                <Route path="/reg" element={<Reg />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;