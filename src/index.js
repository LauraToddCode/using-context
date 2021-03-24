import React from 'react';
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "./Context.js";

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>, 
    document.getElementById("root"));

