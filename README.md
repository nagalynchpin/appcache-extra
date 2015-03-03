AppCache Extra
================

## Introduction

Meteor's appcache package with the ability to add a prompt when the appcache is reloaded as to avoid the awkward UX experience of having the app just reload out of no where. Also, added is the ability to manually add files to the application cache manifest if you want to serve them yourself.

![demo](http://cl.ly/image/3H2w3J0x3S29/Image%202014-07-07%20at%2011.38.37%20PM.png)

================

## Installation / Setup

##### Package Installation
````
meteor add hybrid:appcache-extra
````
================

##### Meteor settings file (settings.json)

````
{
  "appcache": {
    "addedFiles": [
      "/cordova.js"
    ]
  },
  "public": {
    "appcache": "prompt"
  }
}
````

###### Options

* appcache.addedFiles: Array of files you want to manually add to application cache manifest
* public.appcache: either propt or doesn't matter.. if prompt it will render the appcache-prompt template instead of auto refreshing the app

================

##### Meteor AppCache config

````
Meteor.AppCache.config({
  addPaths: ['/.#static/img/'],
  disableRequest: function(req) {
    if ((req.headers.cookie != null) && req.headers.cookie.indexOf("my-key") !== -1)
      return false;
    return true;
  }
});

````

###### Options

* addPaths: Array of folders relative to public/ which you want to manually add to application cache manifest. With this option it's possible to add files hidden from meteor's file watcher (due to it's bad performance with *many* files) [SO](http://stackoverflow.com/questions/11504883/how-to-prevent-meteor-from-watching-files/25161820#25161820). Note: recursive folders not supported yet.
* disableRequest: function which get's called for every request for /app.manifest. In here you can decide to serve the appcache manifest based on the request of the client. This can be used for example to only serve the appcache manifest if a purchased app (which sets a magic header or cookie value) requests the page.

================

##### Customization

You can overwrite the `appcache-prompt` template and styling however you would like!

================

## Final Notes

##### Running your app with settings

````
meteor --settings settings.json
````

================

If you want more features than this provides, file an issue. Feature requests/contributions are welcome.
