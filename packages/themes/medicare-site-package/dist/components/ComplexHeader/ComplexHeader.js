"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Navbar = _interopRequireDefault(require("../Navbar/Navbar"));

var _NavigationMenu = _interopRequireDefault(require("../NavigationMenu/NavigationMenu"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var logo = _ref.logo,
      menuItems = _ref.menuItems;
  return _react.default.createElement(_Navbar.default, {
    inverse: true,
    className: "m-c-navbar"
  }, _react.default.createElement("div", {
    className: "m-c-navbar__section"
  }, _react.default.createElement("a", {
    href: "/somewhere"
  }, _react.default.createElement("img", logo)), _react.default.createElement("div", {
    className: "m-c-navbar__productName"
  }, "Medicare Coverage Tools")), _react.default.createElement("div", {
    className: "m-c-navbar__section m-c-navbar__section--right"
  }, _react.default.createElement(_NavigationMenu.default, {
    alwaysShowMenuButton: true
  }, menuItems.map(function (item, i) {
    return _react.default.createElement("li", {
      key: i,
      className: "m-c-navigationMenu__item"
    }, _react.default.createElement("a", {
      href: item.url
    }, item.title));
  }), _react.default.createElement("li", {
    className: "m-c-navigationMenu__item"
  }, _react.default.createElement("hr", null)), _react.default.createElement("li", {
    className: "m-c-navigationMenu__item"
  }, _react.default.createElement("a", {
    href: "/spanish-version-of-site"
  }, "Espa\xF1ol")))));
};

var _default = Header;
exports.default = _default;