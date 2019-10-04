const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('componentName', { type: String, required: true });
    this.componentName = this.options.componentName;
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'component name',
        default: this.options.componentName,
      },
    ]).then(answers => answers);
  }

  writing() {
    const path = `src/components/${this.options.componentName}`;
    const fileName = 'index.jsx';
    const { componentName } = this.options;
    const component = {
      componentName,
      path,
      fileName,
      displayName: componentName,
    };
    this.fs.copyTpl(
      this.templatePath('component.ejs'),
      this.destinationPath(`${path}/${fileName}`),
      { component },
    );
  }
};
