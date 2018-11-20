const cmdPrepublish =
  'nps release.pre-publish.reset-git && nps release.pre-publish.setup-npm';
const cmdPublish = `npm start release.pre-publish && lerna publish`;
const cmdCopyNpmrc =
  'for p in @packages/*; do cp npmrc-template.ini ${p}/.npmrc; done';

const scripts = {
  tools: {
    create: 'node ./tools/createComponent.js',
  },

  build: {
    default: `node ./tools/compile.js --component`,
  },

  release: {
    default: cmdPublish,
    prePublish: {
      default: cmdPrepublish,
      resetGit: 'git reset --hard HEAD',
      setupNPM: cmdCopyNpmrc,
    },
  },
};

module.exports = { scripts };
