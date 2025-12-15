import { Navigate } from "react-router-dom";

export default function Home() {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" />;

  return <h1>Welcome Home 🔐</h1>;
}
