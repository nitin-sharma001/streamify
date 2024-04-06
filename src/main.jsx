import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./utils/Store/appStore.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Toaster
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#18181B",
            color: "#fff",
          },
        }}
      />
      <App />
    </BrowserRouter>
  </Provider>
);
