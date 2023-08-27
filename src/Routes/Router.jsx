import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/login/Login'
import Statistics from "../pages/Statistics";
import ShortLink from "../pages/ShortLink";
import CreateAcount from '../pages/login/CreateAcount'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/createAcount" element={<CreateAcount />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/shortLink" element={<ShortLink />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
