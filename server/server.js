const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5000;

const { v4: uuidv4 } = require("uuid");

const jsonParser = express.json();

const tasksPath = "./data/tasks.json";

app.get("/tasks", (req, res) => {
  let content = fs.readFileSync(path.resolve(__dirname, tasksPath), "utf8");
  let tasks = JSON.parse(content);
  res.send(tasks);
});
app.post("/tasks", jsonParser, (req, res) => {
  if (!req.body) return res.status(400).send({ messga: "Пустой объект" });
  let { status, priority, title, description, author_name, creation_time } =
    req.body;
  let task = {
    id: uuidv4(),
    status,
    priority,
    title,
    description,
    author_name,
    schedule: { creation_time },
  };
  let content = fs.readFileSync(path.resolve(__dirname, tasksPath), "utf8");
  let tasks = JSON.parse(content);
  tasks.push(task);
  content = JSON.stringify(tasks);
  fs.writeFileSync(path.resolve(__dirname, tasksPath), content);
  res.send(task);
});
app.delete("/tasks/:id", (req, res) => {
  if (!req.params)
    return res.status(404).send({ message: "id задания не найден" });
  let id = req.params.id;
  let content = fs.readFileSync(path.resolve(__dirname, tasksPath), "utf8");
  const tasks = JSON.parse(content);

  let findTask = tasks.find((el) => el.id === id);

  if (!findTask) {
    res.status(404).send({ message: "Задание не найдено" });
  } else {
    let result = tasks.filter((el) => el.id !== id);
    content = JSON.stringify(result);
    fs.writeFileSync(path.resolve(__dirname, tasksPath), content);
    res.send(findTask);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
