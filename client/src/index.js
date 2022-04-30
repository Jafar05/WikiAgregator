import React from 'react';
import './index.css';
import App from './App';
import ReactDOMClient from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom"

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
)
