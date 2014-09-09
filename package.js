Package.describe({
  summary: "Enable the application cache in the browser (with extras)",
  version: "0.1.0",
  name: "andrewreedy/appcache-extra",
  git: "https://github.com/andrewreedy/meteor-appcache-extra"
});

Package.onUse(function (api) {
  api.use('webapp', 'server');
  api.use('reload', 'client');
  api.use('templating', 'client');
  api.use('routepolicy', 'server');
  api.use('underscore', 'server');
  api.use('autoupdate', 'server', {weak: true});
  api.addFiles([
    'appcache-prompt.html',
    'appcache-prompt.css',
    'appcache-client.js'
  ], 'client');
  api.addFiles('appcache-server.js', 'server');
});
