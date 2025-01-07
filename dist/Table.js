"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TableRow = _interopRequireDefault(require("./TableRow"));
var _TableHeadItem = _interopRequireDefault(require("./TableHeadItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Table = function Table(_ref) {
  var theadData = _ref.theadData,
    tbodyData = _ref.tbodyData,
    _ref$thBackgroundColo = _ref.thBackgroundColor,
    thBackgroundColor = _ref$thBackgroundColo === void 0 ? '#04AA6D' : _ref$thBackgroundColo,
    _ref$buttonBackground = _ref.buttonBackgroundColor,
    buttonBackgroundColor = _ref$buttonBackground === void 0 ? '#04AA6D' : _ref$buttonBackground;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    filterText = _useState2[0],
    setFilterText = _useState2[1];
  var _useState3 = (0, _react.useState)(tbodyData),
    _useState4 = _slicedToArray(_useState3, 2),
    sortedData = _useState4[0],
    setSortedData = _useState4[1];
  var _useState5 = (0, _react.useState)("asc"),
    _useState6 = _slicedToArray(_useState5, 2),
    sortDirection = _useState6[0],
    setSortDirection = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    sortedColumn = _useState8[0],
    setSortedColumn = _useState8[1];
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var _useState11 = (0, _react.useState)(4),
    _useState12 = _slicedToArray(_useState11, 2),
    rowsPerPage = _useState12[0],
    setRowsPerPage = _useState12[1];
  var handleFilterChange = function handleFilterChange(e) {
    setFilterText(e.target.value.toLowerCase());
  };
  var handleSort = function handleSort(columnIndex) {
    var sorted = _toConsumableArray(sortedData).sort(function (a, b) {
      var _a$items$columnIndex, _b$items$columnIndex;
      var aValue = (_a$items$columnIndex = a.items[columnIndex]) === null || _a$items$columnIndex === void 0 ? void 0 : _a$items$columnIndex.toString().toLowerCase();
      var bValue = (_b$items$columnIndex = b.items[columnIndex]) === null || _b$items$columnIndex === void 0 ? void 0 : _b$items$columnIndex.toString().toLowerCase();
      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
    setSortedData(sorted);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    setSortedColumn(columnIndex);
  };
  var filteredData = sortedData.filter(function (row) {
    return row.items.some(function (item) {
      return item.toString().toLowerCase().includes(filterText);
    });
  });
  var indexOfLastRow = currentPage * rowsPerPage;
  var indexOfFirstRow = indexOfLastRow - rowsPerPage;
  var currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
  var totalPages = Math.ceil(filteredData.length / rowsPerPage);
  var handleNextPage = function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  var handlePreviousPage = function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  var handleRowsPerPageChange = function handleRowsPerPageChange(e) {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-container"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "myInput",
    placeholder: "Search...",
    onChange: handleFilterChange,
    value: filterText
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pagination-controls"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "rowsPerPage"
  }, "Entries per page: "), /*#__PURE__*/_react["default"].createElement("select", {
    id: "rowsPerPage",
    value: rowsPerPage,
    onChange: handleRowsPerPageChange
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "100"
  }, "100"))), /*#__PURE__*/_react["default"].createElement("table", {
    className: "table",
    id: "myTable"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, theadData.map(function (header, index) {
    return /*#__PURE__*/_react["default"].createElement(_TableHeadItem["default"], {
      key: header,
      item: header,
      onClick: function onClick() {
        return handleSort(index);
      },
      sortDirection: sortedColumn === index ? sortDirection : null,
      isSorted: sortedColumn === index,
      thBackgroundColor: thBackgroundColor
    });
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, currentRows.length > 0 ? currentRows.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
      key: item.id,
      data: item.items
    });
  }) : /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: theadData.length,
    style: {
      textAlign: "center"
    }
  }, "No matching employees found.")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      backgroundColor: buttonBackgroundColor
    },
    onClick: handlePreviousPage,
    disabled: currentPage === 1
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("span", null, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      backgroundColor: buttonBackgroundColor
    },
    onClick: handleNextPage,
    disabled: currentPage === totalPages
  }, "Next")));
};
var _default = exports["default"] = Table;