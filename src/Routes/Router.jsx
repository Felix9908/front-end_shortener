import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Statistics from "../pages/Statistics";
import ShortLink from "../pages/ShortLink";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Statistics />} />
            <Route path="/shortLink" element={<ShortLink />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
