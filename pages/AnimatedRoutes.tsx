"use client"
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Reg from "./reg";
import Main from "./main"
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