const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const tasksPath = "../data/tasks.json";

class TasksController {
  async getAllTasks(req, res) {
    let content = fs.readFileSync(path.resolve(__dirname, tasksPath), "utf8");
    let tasks = JSON.parse(content);
    res.send(tasks);
  }
  async createTask(req, res) {
    if (!req.body) return res.status(400).send({ message: "Пустой объект" });
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
  }
  async updateTask(req, res) {
    if (!req.body)
      return res.status(400).send({ message: "Задача не выбрана" });
    let { id, status, priority, title, description, author_name, schedule } =
      req.body;
    let { creation_time } = schedule;
    let content = fs.readFileSync(path.resolve(__dirname, tasksPath), "utf8");
    let tasks = JSON.parse(content);

    let updatedTask = {
      id,
      status,
      priority,
      title,
      description,
      author_name,
      schedule: { creation_time },
    };

    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return updatedTask;
        // task = updatedTask;
      } else {
        return task;
      }
    });
    content = JSON.stringify(updatedTasks);
    fs.writeFileSync(path.resolve(__dirname, tasksPath), content);
    res.send(updatedTask);
  }
  async deleteTask(req, res) {
    if (!req.params) return res.status(404).send({ message: "Ошибка" });
    let id = req.params.id;
    let content = fs.readFileSync(path.resolve(__dirname, tasksPath), "utf8");
    const tasks = JSON.parse(content);

    let findTask = tasks.find((el) => el.id === id);

    if (!findTask) {
      res.status(404).send({ message: "Заданча не найдена" });
    } else {
      let result = tasks.filter((el) => el.id !== id);
      content = JSON.stringify(result);
      fs.writeFileSync(path.resolve(__dirname, tasksPath), content);
      res.send(findTask);
    }
  }
}

module.exports = new TasksController();
