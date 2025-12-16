import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/user/Home";
import AdminHome from "./pages/admin/AdminHome";
import CreateUser from "./pages/admin/CreateUser";
import UserList from "./pages/admin/UserList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/admin/create-user" element={<CreateUser />} />
      <Route path="/admin/users" element={<UserList />} />
    </Routes>
  );
}
