import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/login/Login';
import Statistics from "../pages/Statistics";
import ShortLink from "../pages/ShortLink";
import AdminLinks from "../pages/AdminLinks";
import FormProfile from "../pages/FormProfile";
import CreateAcount from '../pages/login/CreateAcount';
import UserManagement from '../pages/UserManagement';
import ProtectedRoute from "./ProtectedRoutes"; 

function Router() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/createAcount" element={<CreateAcount />} />

            {/* Rutas protegidas */}
            <Route
              path="/statistics"
              element={
                <ProtectedRoute>
                  <Statistics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shortLink"
              element={
                <ProtectedRoute>
                  <ShortLink />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AdminLinks"
              element={
                <ProtectedRoute>
                  <AdminLinks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/FormProfile"
              element={
                <ProtectedRoute>
                  <FormProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/userManagement"
              element={
                <ProtectedRoute>
                  <UserManagement />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
