import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

     const res = await fetch(
  `${API_URL}/api/admin/login`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }
);

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/franchise");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="min-h-screen bg-gradient-to-br from-[#f8f3ec] via-[#fffaf5] to-[#ece7dc] flex items-center justify-center px-4 py-10">

    <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-[40px] shadow-2xl bg-white">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col justify-center bg-[#9BA57B] p-16 text-white relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-24 -translate-y-24"></div>

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-24 translate-y-24"></div>

        <div className="relative z-10">
          <h2 className="text-6xl font-serif leading-tight">
            Purvanchal
            <br />
            Admin Panel
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/90">
            Manage franchise enquiries, customer requests
            and business operations from one secure dashboard.
          </p>

          <div className="mt-10 flex gap-4">
            <div className="px-5 py-3 bg-white/20 rounded-full">
              Secure Login
            </div>

            <div className="px-5 py-3 bg-white/20 rounded-full">
              Admin Access
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-[#9BA57B] flex items-center justify-center shadow-lg">
              <span className="text-4xl">☕</span>
            </div>
          </div>

          <h1 className="text-center text-4xl md:text-5xl font-serif text-[#3B2F2F]">
            Admin Login
          </h1>

          <p className="text-center text-[#6A5F55] mt-4 mb-10">
            Login to access the administration dashboard
          </p>

          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block mb-2 text-[#3B2F2F] font-medium">
                Email Address
              </label>

              <input
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#faf8f4] focus:border-[#9BA57B] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-[#3B2F2F] font-medium">
                Password
              </label>

              <input
                type="password"
                required
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-[#faf8f4] focus:border-[#9BA57B] outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-[#9BA57B] hover:bg-[#7d8861] text-white rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              {loading ? "Please Wait..." : "Login"}
            </button>

          </form>

          <div className="mt-10 text-center">
            <div className="w-24 h-[2px] bg-[#9BA57B] mx-auto mb-4"></div>

            <p className="text-xs uppercase tracking-[4px] text-[#8C8075]">
              Premium Tea Franchise
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
);
}