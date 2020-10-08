const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('actionName', { type: String, required: true });
    this.actionName = this.options.actionName;
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Action name',
        default: this.options.actionName,
      },
    ]).then((answers) => answers);
  }

  writing() {
    const path = `src/redux/actions`;
    const fileName = `${this.options.actionName}.js`;
    const { actionName } = this.options;
    const action = {
      actionName,
      path,
      fileName,
    };
    this.fs.copyTpl(
      this.templatePath('action.ejs'),
      this.destinationPath(`${path}/${fileName}`),
      { action },
    );
    const testFileName = `${this.options.actionName}.test.js`;
    this.fs.copyTpl(
      this.templatePath('action.test.ejs'),
      this.destinationPath(`${path}/${testFileName}`),
      { action },
    );
  }
};
