<a name="1.0.0"></a>
# [1.0.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.0.0) (2021-01-03)

v1.0.0 is the initial release of the plugin, created as a fork of the now-deprecated [cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4). Kudos to @jeduan and @peterpeterparker for their years of work maintaining that plugin!

## Features

* Updated the Facebook iOS SDK to 8.2.0
* Updated the Facebook Android SDK to 8.1.0
* Updated the Facebook JavaScript SDK used by the browser platform to v9.0
* Added the `FACEBOOK_BROWSER_SDK_VERSION` preference to override the default JavaScript SDK version

### Bug Fixes

* Fixed an issue that previously caused a loop when logging into Facebook on iOS
* Removed all references to Open Graph Stories, which were [deprecated by Facebook in 2019](https://developers.facebook.com/docs/sharing/opengraph)
* Updated plugin.xml to only run after_prepare hook on the browser platform
* Updated browser after_prepare hook to get preferences including `APP_ID` and the new `FACEBOOK_BROWSER_SDK_VERSION` from package.json