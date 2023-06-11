import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./pages/Routers/Routers";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";

//#71D358
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
