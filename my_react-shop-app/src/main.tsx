// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
