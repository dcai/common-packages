const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.data = {};

    this.argument('appname', { type: String, required: true });
    this.data.appname = this.options.appname;
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'appname',
        message: 'Your project name',
        default: this.options.appname,
      },
      {
        type: 'input',
        name: 'author',
        message: 'github username',
        store: true,
        default: 'dcai',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Your license',
        store: true,
        default: 'BSD-2-Clause',
      },
    ]).then((answers) => {
      this.data = answers;
    });
  }

  install() {
    this.npmInstall();
  }

  writing() {
    // copy dotfiles
    // this.fs.copy(this.templatePath('.*'), this.destinationRoot());
    // copy js files in root: jest.config.js setupTest.js etc
    this.fs.copy(this.templatePath('*.js'), this.destinationRoot());
    this.fs.copy(
      this.templatePath('eslintrc.js.tpl'),
      this.destinationPath('.eslintrc.js'),
    );
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig'),
    );
    this.fs.copyTpl(
      this.templatePath('babel.config.js'),
      this.destinationPath('babel.config.js'),
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { ...this.data },
    );

    const pkgJson = {
      repository: {
        type: 'git',
        url: `https://github.com/${this.data.author}/${this.data.appname}.git`,
      },
      devDependencies: {},
      dependencies: {},
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), {
      ...this.data,
    });
  }
};
