"use client"
import Image from 'next/image'
import styles from '@/Style/page.module.css'
import React, {ReactElement, ReactNode} from "react";
import Reg from "./reg";
import ErrorPage from "./ErrorPage";
import { Routes } from "react-router-dom";
import { useRouter}  from 'next/router';
import { Provider } from 'react-redux';
import { setupStore } from '../Store/store';
import Main from "./index"
import Route from "next"



export default function Home() {
    const router = useRouter();
    const store = setupStore();


    let content;

    if (router.pathname === '/') {
        content = <Main />;
    } else if (router.pathname === '/reg') {
        content = <Reg />;
    } else {
        content = <ErrorPage />;
    }

    return (
        <Provider store={store}>
            {content}
        </Provider>
    );
}



