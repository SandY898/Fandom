import Home from "./layout"
import {ComponentType, ReactNode} from "react";
import { Provider } from 'react-redux';
import {setupStore} from "@/Store/store"; // Подставьте ваш путь до хранилища


interface Props {
    Component: ComponentType<any>;
    pageProps: Record<string, unknown>; // Пример типа для pageProps, может быть более конкретным
}


function MyApp({ Component, pageProps }: Props) {
    const store = setupStore(); // Создание вашего хранилища


    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
