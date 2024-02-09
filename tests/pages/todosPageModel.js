import { Selector, t } from "testcafe";

class TodosPage {
  constructor() {
    this.todosApp = Selector(".todoapp");
    this.todoInput = Selector("#todo-input");
    this.todoItem = Selector("li").withAttribute("data-testid", "todo-item");
    this.todoLabel = this.todoItem.find("label");
    this.todoCount = Selector(".todo-count");
    this.allCategory = Selector("a").withAttribute("href", "#/");
    this.activeCategory = Selector("a").withAttribute("href", "#/active");
    this.completedCategory = Selector("a").withAttribute("href", "#/completed");
    this.clearCompletedButton = Selector(".clear-completed");
  }

  async isPageOpened() {
    await t.expect(this.todosApp.visible).ok();
  }

  async createTask(taskName) {
    await t
      .typeText(this.todoInput, taskName, { replace: true })
      .pressKey("enter");
  }

  async completeTask(taskName) {
    const todoLabel = this.todoLabel.withText(taskName);
    const todoCheckbox = todoLabel.prevSibling(".toggle");
    await t.click(todoCheckbox);
  }

  async deleteTask(taskName) {
    const todoLabel = this.todoLabel.withText(taskName);
    const todoDeleteButton = todoLabel.nextSibling(".destroy");
    await t.hover(todoLabel).click(todoDeleteButton);
  }

  async startEditingTask(taskName) {
    const todoLabel = this.todoLabel.withText(taskName);
    await t.doubleClick(todoLabel);
  }

  async changeTaskName(newTaskName) {
    const taskNameInput = this.todoInput.nth(1);
    await t
      .typeText(taskNameInput, newTaskName, { replace: true })
      .pressKey("enter");
  }
  async isTaskDisplayed(taskName, isDisplayed) {
    const todoLabels = this.todoLabel;
    let displayed = false;
    for (let i = 0; i < (await todoLabels.count); i++) {
      const todoName = await todoLabels.nth(i).innerText;
      if (todoName === taskName) {
        displayed = true;
        break;
      }
    }
    await t.expect(displayed).eql(isDisplayed);
  }

  async isTaskElementsDisplayed(taskName, isDisplayed) {
    const todoLabel = this.todoLabel.withText(taskName);
    const todoCheckbox = todoLabel.prevSibling(".toggle");
    const todoDeleteButton = todoLabel.nextSibling(".destroy");
    await t
      .expect(todoCheckbox.visible)
      .eql(isDisplayed)
      .expect(todoDeleteButton.visible)
      .eql(isDisplayed);
  }

  async createTaskAndCheckThatItDisplayed(taskName, isDisplayed) {
    await this.isPageOpened();
    await this.createTask(taskName);
    await this.isTaskDisplayed(taskName, isDisplayed);
  }
}

export default new TodosPage();
