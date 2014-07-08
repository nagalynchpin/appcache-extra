Package.describe({
  summary: "Enable the application cache in the browser (with extras)"
});

Package.on_use(function (api) {
  api.use('webapp', 'server');
  api.use('reload', 'client');
  api.use('templating', 'client');
  api.use('routepolicy', 'server');
  api.use('underscore', 'server');
  api.use('autoupdate', 'server', {weak: true});
  api.add_files([
    'appcache-prompt.html',
    'appcache-prompt.css',
    'appcache-client.js'
  ], 'client');
  api.add_files('appcache-server.js', 'server');
});
