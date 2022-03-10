const chalk = require("chalk");

const boilerplateChoice = [
  {
    name: `Create ${chalk.green("Vue2")} Application`,
    value: "boilerplate-vue2",
    repo: "github:kxxvy/vue2-basic",
  },
  {
    name: `Create ${chalk.green("Vue3")} Application`,
    value: "boilerplate-vue3",
    repo: "direct:https://github.com/kxxvy/vue3-basic.git",
  },
  {
    name: `Create ${chalk.green("React")} Application`,
    value: "boilerplate-react",
    repo: "direct:https://github.com/kxxvy/react-basic.git",
  },
];
module.exports = {
  boilerplateChoice,
};