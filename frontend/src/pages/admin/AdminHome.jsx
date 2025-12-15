import { Navigate } from "react-router-dom";

export default function AdminHome() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "admin") return <Navigate to="/" />;

  return <h1>Admin Dashboard 🔐</h1>;
}
