/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { Mail, Lock } from "lucide-react"; // Iconos amigables de Lucide-React

const LoginAppwrite = ({ handleActive, loginActive }) => {
  const user = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginButton = () => {
    if (email && password) {
      user.login(email, password), handleActive;
    } else {
      handleActive();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-pink-100">
      <form
        className={`${
          loginActive
            ? "flex flex-col gap-4 login-active"
            : "flex flex-col gap-4 login"
        } p-6 bg-white shadow-lg rounded-lg`}
      >
        <div className="flex items-center gap-2">
          <Mail className="text-indigo-500" size={20} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-lg px-4 w-full text-black placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <Lock className="text-indigo-500" size={20} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="rounded-lg px-4 w-full text-black placeholder:text-gray-400"
          />
        </div>

        <button
          className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
          type="button"
          onClick={handleLoginButton}
        >
          Login
        </button>

        <div>
          {/* <button
            className="button"
            type="button"
            onClick={() => user.register(email, password)}
          >
            Register
          </button> */}
        </div>
      </form>
    </section>
  );
};

export default LoginAppwrite;
