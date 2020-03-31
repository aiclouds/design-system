"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Navbar = _interopRequireDefault(require("../Navbar/Navbar"));

var _NavigationMenu = _interopRequireDefault(require("../NavigationMenu/NavigationMenu"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleHeader = function SimpleHeader(_ref) {
  var logo = _ref.logo,
      menuItems = _ref.menuItems;
  return (// Start by bringing in the Navbar component, this acts as the header's container
    // Navbar has one prop - "inverse" - which determines the 'theme':
    //   - When inverse == false, the Navbar has a green background and white text
    //   - When inverse == true, the Navbar has a white background with green text
    _react.default.createElement(_Navbar.default, {
      inverse: false,
      className: "m-c-navbar"
    }, _react.default.createElement("a", {
      href: "/somewhere"
    }, _react.default.createElement("img", logo)), _react.default.createElement("div", {
      className: "m-c-navbar__productName"
    }, "Medicare Coverage Tools"), _react.default.createElement(_NavigationMenu.default, null, menuItems.map(function (item, i) {
      return _react.default.createElement("li", {
        key: i,
        className: "m-c-navigationMenu__item"
      }, _react.default.createElement("a", {
        href: item.url
      }, item.title));
    })))
  );
};

var _default = SimpleHeader;
exports.default = _default;