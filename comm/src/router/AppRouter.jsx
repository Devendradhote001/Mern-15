import React from "react";
import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import Home from "../pages/Home";
import Users from "../pages/Users";
import ProtectedRoute from "../components/ProtectedRoute";
import PublicRoute from "../components/PublicRoute";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <AuthPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
