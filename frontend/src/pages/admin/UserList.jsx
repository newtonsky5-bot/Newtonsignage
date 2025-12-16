import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/admin/users",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/admin/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>All Users</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Screenings</th>
            <th>Memory (GB)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.username}</td>
              <td>{u.screenings}</td>
              <td>{u.memoryGB}</td>
              <td>
                <button onClick={() => deleteUser(u._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
