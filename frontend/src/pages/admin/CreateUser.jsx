import { useState } from "react";
import axios from "axios";

export default function CreateUser() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    screenings: 0,
    memoryGB: 1,
  });

const submitHandler = async (e) => {
  e.preventDefault();

  try {
    console.log("FORM DATA 👉", form);

    const res = await axios.post(
      "http://localhost:5000/api/admin/users",
      {
        ...form,
        screenings: Number(form.screenings),
        memoryGB: Number(form.memoryGB),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log("RESPONSE 👉", res.data);
    alert("User Created Successfully");
    // Reset form after successful creation
    setForm({
      username: "",
      password: "",
      screenings: 0,
      memoryGB: 1,
    });
  } catch (error) {
    console.error("CREATE USER ERROR ❌", error.response?.data || error.message);
    alert(error.response?.data?.message || "Create failed");
  }
};


  return (
    <form onSubmit={submitHandler}>
      <h2>Create User</h2>

      <input placeholder="Username" onChange={(e)=>setForm({...form, username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})}/>
      <input type="number" placeholder="Screenings" onChange={(e)=>setForm({...form, screenings:e.target.value})}/>
      <input type="number" placeholder="Memory (GB)" onChange={(e)=>setForm({...form, memoryGB:e.target.value})}/>

      <button>Create</button>
    </form>
  );
}
