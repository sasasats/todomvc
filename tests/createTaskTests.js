import todosPage from "./pages/todosPageModel";
import browserUtils from "./support/browserUtils";

const validTaskName = "task1";
const invalidShortTaskName = "a";
const invalidSpecialSymbolsTaskName = "'task1'";

fixture("Create task");

test("Create valid task", async () => {
  await todosPage.createTaskAndCheckThatItDisplayed(validTaskName, true);
});

test("Create invalid task using name shorter than intended", async () => {
  await todosPage.createTaskAndCheckThatItDisplayed(
    invalidShortTaskName,
    false
  );
});

test("Create invalid task using special symbols", async () => {
  await todosPage.createTaskAndCheckThatItDisplayed(
    invalidSpecialSymbolsTaskName,
    false
  );
});

test("Task isn't displayed after refreshing the page", async () => {
  await todosPage.createTaskAndCheckThatItDisplayed(validTaskName, true);
  await browserUtils.reload();
  await todosPage.isTaskDisplayed(validTaskName, false);
});
