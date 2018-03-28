cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-launchscreen-storyboard.launchscreen",
    "file": "plugins/cordova-plugin-launchscreen-storyboard/www/launchscreen.js",
    "pluginId": "cordova-plugin-launchscreen-storyboard",
    "clobbers": [
      "window.LaunchScreen"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.mainHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
    "pluginId": "cordova-plugin-nativestorage",
    "clobbers": [
      "NativeStorage"
    ]
  },
  {
    "id": "cordova-plugin-nativestorage.LocalStorageHandle",
    "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-nativestorage.NativeStorageError",
    "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
    "pluginId": "cordova-plugin-nativestorage"
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-voiceit-api-2.VoiceItCordova",
    "file": "plugins/cordova-plugin-voiceit-api-2/www/VoiceItCordova.js",
    "pluginId": "cordova-plugin-voiceit-api-2",
    "clobbers": [
      "window.plugins.VoiceItCordova"
    ]
  },
  {
    "id": "es6-promise-plugin.Promise",
    "file": "plugins/es6-promise-plugin/www/promise.js",
    "pluginId": "es6-promise-plugin",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-launchscreen-storyboard": "1.0.1",
  "cordova-plugin-nativestorage": "2.2.2",
  "cordova-plugin-screen-orientation": "3.0.1",
  "cordova-plugin-voiceit-api-2": "1.3.7",
  "cordova-plugin-whitelist": "1.3.3",
  "es6-promise-plugin": "4.2.2"
};
// BOTTOM OF METADATA
});