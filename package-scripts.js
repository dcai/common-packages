const publishCommand = `npm start release.pre-publish && lerna publish`;

const scripts = {
  tools: {
    create: 'node ./tools/createComponent.js',
  },

  // use npm start "build componentname" OR nps "build componentname"
  // Useful to build individual component and test before publishing
  build: {
    default: `node ./tools/compile.js --component`,
  },

  release: {
    default: publishCommand,
    prePublish: {
      default:
        'nps release.pre-publish.reset-git && nps release.pre-publish.setup-npm',
      resetGit: 'git reset --hard HEAD',
      setupNPM: `for p in @packages/*; do cp .npmrc $p; done`,
    },
  },
};

module.exports = { scripts };
