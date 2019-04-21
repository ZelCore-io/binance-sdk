import "babel-polyfill"
import * as client from "./client"
import * as crypto from "./crypto"
import * as amino from "./encoder"
import * as utils from "./utils"

const { BncClient } = client
module.exports = BncClient
module.exports.crypto = crypto
module.exports.amino = amino
module.exports.utils = utils
