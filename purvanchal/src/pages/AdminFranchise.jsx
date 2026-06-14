import { useEffect, useState } from "react";

export default function AdminFranchise() {
  const [applications, setApplications] =
    useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const [loading, setLoading] =
    useState(true);

  const token =
    localStorage.getItem("adminToken");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications =
    async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/franchise`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await res.json();

        if (data.success) {
          setApplications(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const deleteLead = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this lead?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${API_URL}/api/franchise/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        fetchApplications();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem(
      "adminToken"
    );

    window.location.href =
      "/admin/login";
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-50 to-white p-4 md:p-8">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Franchise Leads
            </h1>
            <p className="text-gray-500 mt-1">
              Manage all franchise applications
            </p>
          </div>

          <button
            onClick={logout}
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-red-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

        <div className="px-6 py-5 border-b bg-gradient-to-r from-black to-gray-800">
          <h2 className="text-white text-xl font-semibold">
            All Applications
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-gray-100">

              <tr className="text-gray-700">

                <th className="px-6 py-4 text-left font-semibold">
                  Name
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  City
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Phone
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Message
                </th>

                <th className="px-6 py-4 text-left font-semibold">
                  Date
                </th>

                <th className="px-6 py-4 text-center font-semibold">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {applications.map((item, index) => (

                <tr
                  key={item._id}
                  className={`transition duration-300 hover:bg-orange-50 ${index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50"
                    }`}
                >

                  <td className="px-6 py-5 font-semibold text-gray-800 whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="px-6 py-5 text-gray-600 whitespace-nowrap">
                    {item.city}
                  </td>

                  <td className="px-6 py-5 text-gray-600 whitespace-nowrap">
                    {item.phone}
                  </td>

                  <td className="px-6 py-5 text-gray-600 max-w-xs">
                    <div className="line-clamp-2">
                      {item.message}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-600 whitespace-nowrap">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-5 text-center">

                    <button
                      onClick={() =>
                        deleteLead(item._id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition duration-300 shadow-md hover:shadow-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );

}