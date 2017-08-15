var DeviceEventEmitter = require('react-native').DeviceEventEmitter
exports.default = {
  set: function (e) {DeviceEventEmitter.emit('topViewAdd', e)},
  remove: function () {DeviceEventEmitter.emit('topViewRemove')}
}, module.exports = exports.default
