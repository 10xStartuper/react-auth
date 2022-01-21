import React, { useState, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";

const HomePage = lazy(() => import("./pages/Home/Home"));
const LoginPage = lazy(() => import("./pages/Auth/Login"));
const RegisterPage = lazy(() => import("./pages/Auth/Register"));

const App = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  return (
    <Suspense fallback={<>Not working</>}>
      <Router>
        <Routes>
          {token ? (
            <Route exact path="/" element={<HomePage />} />
          ) : (
            <Route exact path="/" element={<LoginPage />} />
          )}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
