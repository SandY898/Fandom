import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Reg from "../pages/reg";
import Main from "../components/main";
import { useRouter } from "next/router";

function AnimatedRoutes() {
    const router = useRouter();

    // Проверка наличия window для избежания ошибки при использовании location
    if (typeof window === 'undefined') {
        return null; // Или другая обработка для сервера
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={router.pathname}>
                <Route path="/" element={<Main />} />
                <Route path="/reg" element={<Reg />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
