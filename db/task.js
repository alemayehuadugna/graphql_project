const { db } = require("./index");

const createTasksTable = async () => {
  const query = `
        CREATE TABLE IF NOT EXISTS task (
            id integer PRIMARY KEY,
            isCompleted boolean,
            task text
        )
    `;

  await db.raw(query);
};

const queryAllTasks = async () => {
  let result = await db.select().table("task");

  return result;
};

const resolveAddTask = async (root, { isCompleted, task }) => {
  let newTask = {
    isCompleted,
    task,
  };

  await db("task").insert(newTask);
  return newTask;
};

const resolveUpdateTask = async (root, { id, isCompleted }) => {
  db("task")
    .update(
      {
        isCompleted: isCompleted
      },
      {
        returning: true,
        plain: true,
      }
    )
    .where({ id: id })
    .then(function (result) {
      return result;
    });
};

const resolveDeleteTask = async (root, { id }) => {
  await db("task").delete().where({ id: id });
};

createTasksTable();

module.exports = {
  createTasksTable,
  queryAllTasks,
  resolveAddTask,
  resolveUpdateTask,
  resolveDeleteTask,
};
