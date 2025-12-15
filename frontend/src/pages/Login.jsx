import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const submitHandler = async (e) => {
  e.preventDefault();

  const { data } = await axios.post(
    "http://localhost:5000/api/auth/login",
    { email, password }
  );

  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);

  if (data.role === "admin") {
    navigate("/admin");
  } else {
    navigate("/home");
  }
};


  return (
    <form onSubmit={submitHandler} style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

      <p>
        New user? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}
