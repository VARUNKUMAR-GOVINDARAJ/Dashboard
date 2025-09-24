import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg border border-[#653F00] p-6 pb-8">
      <h2 className="text-2xl font-bold mb-4 text-[#653F00]">Users</h2>

      <div className="overflow-x-auto rounded-lg border border-[#E2D3B6]">
        <table className="min-w-full border-collapse">
          <thead className="bg-[#FFF5E6]">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Company</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="text-center py-8">
                  <div className="loader border-4 border-[#653F00] border-t-transparent rounded-full w-8 h-8 mx-auto animate-spin"></div>
                  <p className="mt-2 text-[#653F00] font-medium">Loading...</p>
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-[#653F00] font-medium">
                  No Records Found
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className={`px-4 py-2 border-[#E2D3B6] ${index !== users.length - 1 ? "border-b" : ""}`}>
                    {user.name}
                  </td>
                  <td className={`px-4 py-2 border-[#E2D3B6] ${index !== users.length - 1 ? "border-b" : ""}`}>
                    {user.email}
                  </td>
                  <td className={`px-4 py-2 border-[#E2D3B6] ${index !== users.length - 1 ? "border-b" : ""}`}>
                    {user.phone}
                  </td>
                  <td className={`px-4 py-2 ${index !== users.length - 1 ? "border-b border-[#E2D3B6]" : ""}`}>
                    {user.company.name}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Loader style */}
      <style>
        {`
          .loader {
            border-top-color: transparent;
          }
        `}
      </style>
    </div>
  );
};

export default UsersTable;
