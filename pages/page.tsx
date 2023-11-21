"use client"
import Image from 'next/image'
import styles from '../Style/page.module.css'
import React from "react";
import logo from "./logo.svg";
import Main from "./main";
import Reg from "./reg";
import ErrorPage from "./ErrorPage";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import UIButton from "./UIButton";
import { Provider } from 'react-redux';
import { setupStore } from '../src/Store/store';
import App from "./App"

export default function Home() {
  const store = setupStore();
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}


