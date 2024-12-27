"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TableRow = function TableRow(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("tr", null, data.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      key: item
    }, item);
  }));
};
var _default = exports["default"] = TableRow;