'use strict';

var fs = require('fs');

module.exports = function (context) {
  var getPreferenceValue = function (config, name) {
      var value = config.match(new RegExp('name="' + name + '" value="(.*?)"', "i"))
      if(value && value[1]) {
          return value[1]
      } else {
          return null
      }
  }

  var getPreferenceValueFromPackageJson = function (config, name) {
      var value = config.match(new RegExp('"' + name + '":\\s"(.*?)"', "i"))
      if(value && value[1]) {
          return value[1]
      } else {
          return null
      }
  }

  var FACEBOOK_URL_SCHEME_SUFFIX = ' '

  if(process.argv.join("|").indexOf("FACEBOOK_URL_SCHEME_SUFFIX=") > -1) {
  	FACEBOOK_URL_SCHEME_SUFFIX = process.argv.join("|").match(/FACEBOOK_URL_SCHEME_SUFFIX=(.*?)(\||$)/)[1]
  } else {
  	var config = fs.readFileSync("config.xml").toString()
  	FACEBOOK_URL_SCHEME_SUFFIX = getPreferenceValue(config, "FACEBOOK_URL_SCHEME_SUFFIX")
    if(!FACEBOOK_URL_SCHEME_SUFFIX) {
      var packageJson = fs.readFileSync("package.json").toString()
      FACEBOOK_URL_SCHEME_SUFFIX = getPreferenceValueFromPackageJson(packageJson, "FACEBOOK_URL_SCHEME_SUFFIX")
    }
  }

  if(FACEBOOK_URL_SCHEME_SUFFIX === ' ') {
    FACEBOOK_URL_SCHEME_SUFFIX = ''
  }

  var getPlistPath = function () {
    var common = context.requireCordovaModule('cordova-common'), 
    util = context.requireCordovaModule('cordova-lib/src/cordova/util'), 
    projectName = new common.ConfigParser(util.projectConfig(util.isCordova())).name(), 
    plistPath = './platforms/ios/' + projectName + '/' + projectName + '-Info.plist'
    return plistPath
  }

  var plistPath = getPlistPath()

  var updatePlistContent = function () {
    fs.stat(plistPath, function (error, stat) {
      if(error) {
        return
      }

      var plistContent = fs.readFileSync(plistPath, 'utf8')

      plistContent = plistContent.replace(/FACEBOOK_URL_SCHEME_SUFFIX_PLACEHOLDER/g, FACEBOOK_URL_SCHEME_SUFFIX)

      fs.writeFileSync(plistPath, plistContent, 'utf8')
    })
  }

  updatePlistContent()
}