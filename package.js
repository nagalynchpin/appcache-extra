Package.describe({
  name: "hybrid:appcache-extra",
  summary: "Meteor's appcache + ability to prompt + manually add files",
  version: "0.1.1",
  git: "https://github.com/meteorhybrid/appcache-extra"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');

  api.use([
    'reload',
    'templating'
  ], 'client');

  api.use([
    'routepolicy',
    'webapp',
    'underscore'
  ], 'server');

  api.use('autoupdate', 'server', {weak: true});

  api.addFiles([
    'appcache-prompt.html',
    'appcache-prompt.css',
    'appcache-client.js'
  ], 'client');

  api.addFiles('appcache-server.js', 'server');
});
