import todosPage from "./pages/todosPageModel";

const validTaskName = "task1";

fixture("Delete task");

test("Delete task", async () => {
  await todosPage.createTaskAndCheckThatItDisplayed(validTaskName, true);
  await todosPage.deleteTask(validTaskName);
  await todosPage.isTaskDisplayed(validTaskName, false);
});
