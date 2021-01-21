var exec = require('cordova/exec')

exports.getLoginStatus = function getLoginStatus (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getLoginStatus', [])
}

exports.showDialog = function showDialog (options, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'showDialog', [options])
}

exports.login = function login (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'login', permissions)
}

exports.checkHasCorrectPermissions = function checkHasCorrectPermissions (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'checkHasCorrectPermissions', permissions)
}

exports.setAutoLogAppEventsEnabled = function (enabled, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'setAutoLogAppEventsEnabled', [enabled]);
}

exports.logEvent = function logEvent (name, params, valueToSum, s, f) {
  // Prevent NSNulls getting into iOS, messes up our [command.argument count]
  if (!params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name])
  } else if (params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params])
  } else if (params && valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params, valueToSum])
  } else {
    f('Invalid arguments')
  }
}

exports.logPurchase = function logPurchase (value, currency, params, s, f) {
  if (typeof params === 'function') {
    s = params;
    f = s;
    params = undefined;
  }
  if (!params) {
    exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency])
  } else {
    exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency, params])
  }
}

exports.getAccessToken = function getAccessToken (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getAccessToken', [])
}

exports.logout = function logout (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logout', [])
}

exports.api = function api (graphPath, permissions, httpMethod, s, f) {
  permissions = permissions || []
  if (typeof httpMethod === 'function') {
    s = httpMethod;
    f = s;
    httpMethod = undefined;
  }
  if (httpMethod) {
    httpMethod = httpMethod.toUpperCase();
    if (httpMethod != 'POST' && httpMethod != 'DELETE') {
      httpMethod = undefined;
    }
  }
  if (!httpMethod) {
    exec(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions])
  } else {
    exec(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions, httpMethod])
  }
}

exports.getDeferredApplink = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}

exports.activateApp = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'activateApp', [])
}
