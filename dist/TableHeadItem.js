"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TableHeadItem = function TableHeadItem(_ref) {
  var item = _ref.item,
    onClick = _ref.onClick,
    sortDirection = _ref.sortDirection,
    isSorted = _ref.isSorted;
  return /*#__PURE__*/_react["default"].createElement("th", {
    onClick: onClick,
    style: {
      cursor: "pointer",
      textAlign: "left"
    }
  }, item, isSorted && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: sortDirection === "asc" ? _freeSolidSvgIcons.faArrowUp : _freeSolidSvgIcons.faArrowDown,
    style: {
      marginLeft: "8px"
    }
  }));
};
var _default = exports["default"] = TableHeadItem;