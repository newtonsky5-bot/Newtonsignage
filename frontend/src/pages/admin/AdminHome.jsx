import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <nav>
        <Link to="/admin/create-user">Create User</Link> |{" "}
        <Link to="/admin/users">All Users</Link>
      </nav>
    </div>
  );
}
