import ClientUser from "../models/ClientUser.js";
import bcrypt from "bcryptjs";

// CREATE USER
export const createClientUser = async (req, res) => {
  try {
    console.log("ADMIN CREATE BODY 👉", req.body);

    const { username, password, screenings, memoryGB } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username & password required" });
    }

    const exists = await ClientUser.findOne({ username });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await ClientUser.create({
      username,
      password: hashedPassword,
      screenings: Number(screenings),
      memoryGB: Number(memoryGB),
    });

    console.log("USER CREATED ✅", user);

    res.status(201).json(user);
  } catch (err) {
    console.error("CREATE USER ERROR ❌", err);
    res.status(500).json({ message: err.message });
  }
};



// GET ALL USERS
export const getAllClientUsers = async (req, res) => {
  const users = await ClientUser.find().select("-password");
  res.json(users);
};

// UPDATE USER
export const updateClientUser = async (req, res) => {
  const { id } = req.params;
  const { screenings, memoryGB } = req.body;

  const user = await ClientUser.findByIdAndUpdate(
    id,
    { screenings, memoryGB },
    { new: true }
  );

  res.json(user);
};

// DELETE USER
export const deleteClientUser = async (req, res) => {
  await ClientUser.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
