Cordova Asset Compiler & Loader
================

## Introduction

Cordova Loader's goal is to make using Meteor with Cordova as easy as using Meteor itself. The compiler interprets the provided Cordova project directory and compiles the assets into minified, platform-specific JavaScript which is stored in memory. When the client loads, it automatically pulls in the platform-specific cordova code for that device. The Cordova API can be used from Meteor the same as it is from vanilla JS apps. Enjoy!

![demo](http://cl.ly/image/3H2w3J0x3S29/Image%202014-07-07%20at%2011.38.37%20PM.png)

================

## Installation / Setup

##### Requirements
* Xcode: 5.1.1
* [Cordova: 3.5](http://cordova.apache.org/)

================

##### Package Installation
````
mrt add appcache-cordova
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
================

## Final Notes

##### Running your app with settings
````
mrt --settings settings.json
````
================

If you want more features than this provides, file an issue. Feature requests/contributions are welcome.
