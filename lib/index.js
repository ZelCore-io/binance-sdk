"use strict";

require("babel-polyfill");

var client = _interopRequireWildcard(require("./client"));

var crypto = _interopRequireWildcard(require("./crypto"));

var amino = _interopRequireWildcard(require("./encoder"));

var utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var BncClient = client.BncClient;
module.exports = BncClient;
module.exports.crypto = crypto;
module.exports.amino = amino;
module.exports.utils = utils;