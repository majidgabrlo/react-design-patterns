const express = require("express");

const app = express();
app.use(express.json());

let currentUser = {
  id: 5,
  name: "John doe",
  age: 54,
  hairColor: "blond",
  hobbies: ["Swiming", "Cycling"],
};

let users = [
  {
    id: 1,
    name: "Majid",
    age: 25,
    hairColor: "black",
    hobbies: ["Boxing", "Coding"],
  },
  {
    id: 2,
    name: "John",
    age: 44,
    hairColor: "blonde",
    hobbies: ["Gym", "Running"],
  },
  {
    id: 3,
    name: "Emma",
    age: 30,
    hairColor: "brown",
    hobbies: ["Swiming", "Cycling"],
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id === +id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;
  users = users.filter((user) => user.id !== id);
  users=[...users,{updatedUser,id}]
  res.json(updatedUser)
});

app.listen(8000,()=>{
    console.log("Running on 8000");
})
