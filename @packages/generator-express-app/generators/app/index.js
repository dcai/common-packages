const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', { type: String, required: false });
    this.appname = this.options.appname;
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.options.appname,
      },
      {
        type: 'input',
        name: 'gituser',
        message: 'Your github user',
        store: true,
        default: 'Dongsheng Cai',
      },
    ]).then((answers) => {
      this.appname = answers.name;
      this.gituser = answers.gituser;
    });
  }

  install() {
    this.npmInstall();
  }

  writing() {
    // copy dotfiles
    this.fs.copy(this.templatePath('.*'), this.destinationRoot());
    // copy all js files
    this.fs.copy(this.templatePath('*.js'), this.destinationRoot());

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { appname: this.appname, gituser: this.gituser },
    );

    const pkgJson = {
      devDependencies: {},
      dependencies: {},
    };

    if (this.reactRouter) {
      pkgJson.dependencies['react-router-dom'] = '*';
    }
    if (this.typescript) {
      pkgJson.devDependencies['@types/react'] = '*';
      pkgJson.devDependencies['@types/react-dom'] = '*';
    }

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copyTpl(this.templatePath('src'), this.destinationPath('src'), {
      appname: this.appname,
      typescript: this.typescript,
    });
    if (this.typescript) {
      this.fs.copyTpl(
        this.templatePath('tsconfig.json'),
        this.destinationPath('tsconfig.json'),
        {},
      );
    }
  }
};
