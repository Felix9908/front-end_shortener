import { useState } from "react";
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Navbar from "../components/Navbar";

const UserManagement = () => {
  // Datos de usuarios de ejemplo
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "johndoe",
      fullName: "John Doe",
      email: "johndoe@gmail.com",
      isActive: true,
    },
    {
      id: 2,
      username: "janedoe",
      fullName: "Jane Doe",
      email: "janedoe@gmail.com",
      isActive: false,
    },
  ]);

  const handleEdit = (id) => {
    console.log("Edit user with ID:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete user with ID:", id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleActivate = (id) => {
    console.log("Activate user with ID:", id);
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full flex justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Username</th>
                <th className="py-3 px-6 text-left">Full Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">{user.username}</td>
                  <td className="py-3 px-6 text-left">{user.fullName}</td>
                  <td className="py-3 px-6 text-left">{user.email}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center space-x-4">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleActivate(user.id)}
                        className={`${
                          user.isActive
                            ? "text-green-500 hover:text-green-700"
                            : "text-red-500 hover:text-red-700"
                        }`}
                      >
                        {user.isActive ? <FaCheckCircle /> : <FaTimesCircle />}
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
