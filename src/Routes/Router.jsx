import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/login/Login';
import Statistics from "../pages/Statistics";
import ShortLink from "../pages/ShortLink";
import AdminLinks from "../pages/AdminLinks";
import FormProfile from "../pages/FormProfile";
import CreateAccount from '../pages/login/CreateAccount';
import UserManagement from '../pages/UserManagement';
import ProtectedRoute from "./ProtectedRoutes"; 
import AdPage from "../pages/AdPage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/createAcount" element={<CreateAccount />} />
            <Route path="/:shortCode" element={<AdPage />} />
            
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
