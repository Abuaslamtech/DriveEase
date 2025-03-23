import React, { useContext, useState } from "react";
import {
  LogIn,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { CarContext } from "../contexts/CarContext";

const AuthPage = () => {
  const navigate = useNavigate();
  const { login, register } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { cars } = useContext(CarContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await register(formData);
    
    if (result.success) {
      alert("Registration successful! Please log in.");
      setIsLogin(true);
    } else {
      setError(result.error);
      alert(result.error);
    }
    
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      alert("Login successful!");
      navigate("/");
    } else {
      setError(result.error);
      alert(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Banner */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 lg:w-1/2 py-8 px-6 flex flex-col justify-between relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full bg-white opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="relative">
            <Link
              to="/"
              className="inline-flex items-center text-white hover:opacity-80 transition-all duration-300 transform hover:-translate-x-1"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="text-white py-12 lg:py-0 text-center lg:text-left relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 lg:leading-tight">
              Welcome to{" "}
              <span className="bg-white text-blue-600 px-2 py-1 rounded">
                DriveEase
              </span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Your journey begins with a simple login. Access your account to
              book cars, manage reservations, and experience hassle-free
              driving.
            </p>

            <div className="hidden lg:block transform transition-transform duration-700 hover:scale-105">
              {cars && cars.length > 0 ? (
                <img
                  src={cars[0].image}
                  alt="Car rental illustration"
                  className="mx-auto lg:mx-0 rounded-lg  max-w-md"
                />
              ) : (
                <div className="h-64 w-full bg-blue-500 rounded-lg animate-pulse"></div>
              )}
            </div>
          </div>

          <div className="text-blue-100 text-sm text-center relative z-10">
            &copy; {new Date().getFullYear()} DriveEase. All rights reserved.
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-2xl rounded-2xl p-8 transition-all duration-300">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {isLogin ? "Sign in to your account" : "Create a new account"}
                </h2>
                <p className="text-gray-600 mt-2">
                  {isLogin
                    ? "Enter your credentials to access your account"
                    : "Fill in your details to get started"}
                </p>
              </div>

              <div className="mb-6">
                {/* Toggle Buttons */}
                <div className="flex border border-gray-200 rounded-lg p-1 mb-8 bg-gray-50">
                  <button
                    className={`flex-1 py-3 rounded-md font-medium text-sm transition-all duration-300 ${
                      isLogin
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsLogin(true)}
                  >
                    Sign In
                  </button>
                  <button
                    className={`flex-1 py-3 rounded-md font-medium text-sm transition-all duration-300 ${
                      !isLogin
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsLogin(false)}
                  >
                    Register
                  </button>
                </div>

                {/* Auth Form */}
                {isLogin ? (
                  <form onSubmit={handleLogin}>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <div className="relative group">
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                            size={18}
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="pl-10 pr-3 w-full border border-gray-300 rounded-lg py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative group">
                          <Lock
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                            size={18}
                          />
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="pl-10 pr-10 w-full border border-gray-300 rounded-lg py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 focus:outline-none transition-colors"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="remember"
                            className="ml-2 text-sm text-gray-700"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <button
                        type="submit"
                        className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <LogIn size={18} className="mr-2" />
                        Sign In
                      </button>

                      <div className="relative flex items-center justify-center mt-6">
                        <div className="border-t border-gray-200 w-full"></div>
                        <div className="absolute bg-white px-4 text-sm text-gray-500">
                          Or continue with
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <button className="flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                          Google
                        </button>
                        <button className="flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 transition-colors">
                          Facebook
                        </button>
                      </div>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleRegister}>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            className="w-full border border-gray-300 rounded-lg py-3 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            className="w-full border border-gray-300 rounded-lg py-3 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <div className="relative group">
                          <Mail
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                            size={18}
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="pl-10 w-full border border-gray-300 rounded-lg py-3 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative group">
                          <Lock
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors"
                            size={18}
                          />
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="pl-10 pr-10 w-full border border-gray-300 rounded-lg py-3 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 focus:outline-none transition-colors"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                        <div className="mt-1">
                          <div className="flex space-x-1 mt-2">
                            <div className="h-1 w-1/4 bg-gray-200 rounded">
                              <div className="h-1 w-full bg-red-500 rounded"></div>
                            </div>
                            <div className="h-1 w-1/4 bg-gray-200 rounded">
                              <div className="h-1 w-1/2 bg-yellow-500 rounded"></div>
                            </div>
                            <div className="h-1 w-1/4 bg-gray-200 rounded">
                              <div className="h-1 w-0 bg-green-500 rounded"></div>
                            </div>
                            <div className="h-1 w-1/4 bg-gray-200 rounded">
                              <div className="h-1 w-0 bg-green-500 rounded"></div>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Password strength: Weak
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            id="terms"
                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                        </div>
                        <label
                          htmlFor="terms"
                          className="ml-2 text-sm text-gray-700"
                        >
                          I agree to the{" "}
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            Terms &amp; Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800 underline"
                          >
                            Privacy Policy
                          </a>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        <User size={18} className="mr-2" />
                        Create Account
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="text-center mt-6">
              {isLogin ? (
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                  >
                    Register now
                    <ChevronRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </p>
              ) : (
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                  >
                    Sign in
                    <ChevronRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
