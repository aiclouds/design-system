"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * The Navbar component serves as a container element for the navbar's content
 */
var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$inverse = _ref.inverse,
      inverse = _ref$inverse === void 0 ? false : _ref$inverse;
  var cN = (0, _classnames.default)('m-c-navbar', inverse && 'm-c-navbar--inverse', className);
  return _react.default.createElement("div", {
    className: cN
  }, children);
};

var _default = Navbar;
exports.default = _default;