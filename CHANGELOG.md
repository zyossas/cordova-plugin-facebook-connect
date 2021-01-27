<a name="1.1.1"></a>
# [1.1.1](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.1.1) (2021-01-27)

## Bug Fixes

* Fixed an issue that caused standard events, e.g. App Launches, to be automatically logged on iOS despite `FACEBOOK_AUTO_LOG_APP_EVENTS` being set to "false" (closes [#16](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/16))

<a name="1.1.0"></a>
# [1.1.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.1.0) (2021-01-21)

## Features

* Added the `FACEBOOK_URL_SCHEME_SUFFIX` preference to allow for specifying a unique URL Suffix for cases where multiple apps use the same Facebook app (closes [#3](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/3))
* Added the `FACEBOOK_AUTO_LOG_APP_EVENTS` preference and a new `setAutoLogAppEventsEnabled` method to allow for disabling automatic event collection, an important feature for GDPR compliance (closes [#7](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/7))
* Updated the `api` method to allow for optionally passing an httpMethod (one of "POST" or "DELETE") in Graph API requests (closes [#10](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/10))
* Updated the `logPurchase` method to accept an optional argument for parameters (closes [#6](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/6))

<a name="1.0.2"></a>
# [1.0.2](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.0.2) (2021-01-16)

## Bug Fixes

* Updated the plugin's `api` method to ensure that Graph API requests on iOS work as expected with the most recent version of the Facebook SDK (closes [#12](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/12))

<a name="1.0.1"></a>
# [1.0.1](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.0.1) (2021-01-08)

## Bug Fixes

* Updated browser after_prepare hook to properly treat APP_ID as a string (closes [#4](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/4))

## Documentation

* Updated README to note that special characters such as ampersands must be escaped to avoid build errors (closes [#5](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/issues/5))

<a name="1.0.0"></a>
# [1.0.0](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect/releases/tag/v1.0.0) (2021-01-03)

v1.0.0 is the initial release of the plugin, created as a fork of the now-deprecated [cordova-plugin-facebook4](https://github.com/jeduan/cordova-plugin-facebook4). Kudos to @jeduan and @peterpeterparker for their years of work maintaining that plugin!

## Features

* Updated the Facebook iOS SDK to 8.2.0
* Updated the Facebook Android SDK to 8.1.0
* Updated the Facebook JavaScript SDK used by the browser platform to v9.0
* Added the `FACEBOOK_BROWSER_SDK_VERSION` preference to override the default JavaScript SDK version

## Bug Fixes

* Fixed an issue that previously caused a loop when logging into Facebook on iOS
* Removed all references to Open Graph Stories, which were [deprecated by Facebook in 2019](https://developers.facebook.com/docs/sharing/opengraph)
* Updated plugin.xml to only run after_prepare hook on the browser platform
* Updated browser after_prepare hook to get preferences including `APP_ID` and the new `FACEBOOK_BROWSER_SDK_VERSION` from package.json