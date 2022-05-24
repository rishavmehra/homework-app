import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { routes } from "./routes";
import { generateAppRoutes } from "./navigation/utils";

const appRoutes = generateAppRoutes(routes);

ReactDOM.render(<App routes={appRoutes} />, document.getElementById("root"));

serviceWorker.unregister();
