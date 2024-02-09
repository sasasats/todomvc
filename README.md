# Test assignment todo.mvc
The project is built on __Node.js__, __TestCafe__ and __Allure__
## Actions before cloning the repository:
* Install [__Node.js__](https://nodejs.org/en/download)
* Use the CLI command `npm install -g allure-commandline`

## Set up a project
```
npm install
```

## Run tests
```
testcafe chrome --reporter allure
```

## Generate and open an Allure report
```
allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report
```

### Negative checks
* Create invalid task using name shorter than intended
* Create invalid task using special symbols
* Task isn't displayed after refreshing the page
* Task elements are not displayed when editing the task

### Positive checks
* Create valid task
* Edit task
* Complete task
* Delete task
