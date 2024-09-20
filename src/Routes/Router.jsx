import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/login/Login'
import Statistics from "../pages/Statistics";
import ShortLink from "../pages/ShortLink";
import AdminLinks from "../pages/AdminLinks";
import FormProfile from "../pages/FormProfile";
import CreateAccount from '../pages/login/CreateAccount';
import UserManagement from '../pages/UserManagement'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/createAccount" element={<CreateAccount />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/shortLink" element={<ShortLink />} />
            <Route path="/AdminLinks" element={<AdminLinks />} />
            <Route path="/FormProfile" element={<FormProfile />} />
            <Route path="/userManagement" element={<UserManagement />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
