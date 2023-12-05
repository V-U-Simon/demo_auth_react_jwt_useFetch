import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  // RouterProviderProps,
} from "react-router-dom";
import React from "react";
import { Home } from "src/routes/Home";
import { Layout } from "src/routes/Layout";
import { Profile } from "src/routes/Profile";
import { Login } from "src/routes/Login";
import { Logout } from "src/routes/Logout";
import { Private } from "src/routes/Private";
import { ProtectedUniversal } from "src/routes/ProtectedRoutes";
import { Registration } from "src/routes/Registration";

export const DataRoutes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        {/* Private routes */}
        <Route path="" element={<ProtectedUniversal />}>
          <Route path="profile/" element={<Profile />} />
          <Route path="private/" element={<Private />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
