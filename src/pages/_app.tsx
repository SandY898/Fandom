import Home from "../temp/layout"
import {ComponentType, ReactNode} from "react";
import { Provider } from 'react-redux';
import {setupStore} from "@/Store/store";
import {AnimatePresence} from "framer-motion"; // Подставьте ваш путь до хранилища
import "../Style/globals.css"


interface Props {
    Component: ComponentType<any>;
    pageProps: Record<string, unknown>; // Пример типа для pageProps, может быть более конкретным
}


function MyApp({ Component, pageProps }: Props) {
    const store = setupStore(); // Создание вашего хранилища


    return (
        <AnimatePresence mode={'wait'}>
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        </AnimatePresence>
    );
}

export default MyApp;
