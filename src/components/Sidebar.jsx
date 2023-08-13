import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen bg-blue-500 w-[300px]">
      <ul>
        <li className="flex items-center h-[40px] border border-black mb-1">
          <Link to="/acortarLink">Acortar link</Link>
        </li>
        <li className="flex items-center h-[40px] border border-black mb-1">
          <Link to="/">Statistics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
