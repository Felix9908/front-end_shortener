import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Statistics from "../pages/Statistics";
import AcortarLink from "../pages/AcortarLink";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Statistics />} />
            <Route path="/acortarLink" element={<AcortarLink />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Router;
