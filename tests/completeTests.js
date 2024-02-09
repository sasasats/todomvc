import todosPage from "./pages/todosPageModel";

const validTaskName = "task1";

fixture("Complete task");

test("Complete task", async (t) => {
  await todosPage.createTaskAndCheckThatItDisplayed(validTaskName, true);
  await todosPage.completeTask(validTaskName)
  await todosPage.isTaskDisplayed(validTaskName, true);
  await t.click(todosPage.activeCategory);
  await todosPage.isTaskDisplayed(validTaskName, false);
  await t.click(todosPage.completedCategory);
  await todosPage.isTaskDisplayed(validTaskName, true);
});
