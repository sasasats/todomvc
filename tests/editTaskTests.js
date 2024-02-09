import todosPage from "./pages/todosPageModel";

const validTaskName = "task1";
const newValidTaskName = "task2";

fixture("Edit task");

test("Edit task", async () => {
  await todosPage.createTaskAndCheckThatItDisplayed(validTaskName, true);
  await todosPage.startEditingTask(validTaskName);
  await todosPage.changeTaskName(newValidTaskName);
  await todosPage.isTaskDisplayed(newValidTaskName, true);
});

test("Task elements are not displayed when editing the task", async () => {
  await todosPage.createTaskAndCheckThatItDisplayed(validTaskName, true);
  await todosPage.startEditingTask(validTaskName);
  await todosPage.isTaskElementsDisplayed(validTaskName, false);
});
