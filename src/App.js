import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ErrorPage from "./components/ErrorPage";
import AccountSettings from "./components/AccountSettings";
import PrivacySettings from "./components/PrivacySettings";
import Navbar from "./components/layout/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      {/*  the routing structure using Routes and Route components */}
      <Routes>
        {/* Redirect the root path '/' to '/home' */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/*  the route for the Home component */}
        <Route path="/home" element={<Home />} />

        {/*  the route for the Profile component with a dynamic userId parameter */}
        <Route path="/profile/:userId" element={<Profile />} />

        {/*  the route for the Settings component with nested routes */}
        <Route path="/settings" element={<Settings />}>
          {/*  the nested route for AccountSettings under Settings */}
          <Route path="account" element={<AccountSettings />} />

          {/*  the nested route for PrivacySettings under Settings */}
          <Route path="privacy" element={<PrivacySettings />} />
        </Route>

        {/*  a catch-all route for undefined paths that renders the ErrorPage component */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
