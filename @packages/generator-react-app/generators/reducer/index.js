const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('reducerName', { type: String, required: true });
    this.reducerName = this.options.reducerName;
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Reducer name',
        default: this.options.reducerName,
      },
    ]).then((answers) => answers);
  }

  writing() {
    const path = `src/redux/reducers`;
    const fileName = `${this.options.reducerName}.js`;
    const { reducerName } = this.options;
    const reducer = {
      reducerName,
      path,
      fileName,
    };
    this.fs.copyTpl(
      this.templatePath('reducer.ejs'),
      this.destinationPath(`${path}/${fileName}`),
      { reducer },
    );
    const testFileName = `${this.options.reducerName}.test.js`;
    this.fs.copyTpl(
      this.templatePath('reducer.test.ejs'),
      this.destinationPath(`${path}/${testFileName}`),
      { reducer },
    );
  }
};
