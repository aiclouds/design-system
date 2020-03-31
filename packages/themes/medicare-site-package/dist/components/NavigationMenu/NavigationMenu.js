"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _components = require("@cmsgov/design-system-core/src/components");

var _CloseSymbol = _interopRequireDefault(require("../CloseSymbol"));

var _HamburgerSymbol = _interopRequireDefault(require("../HamburgerSymbol"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniqueid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NavigationMenu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(NavigationMenu, _React$PureComponent);

  function NavigationMenu(props) {
    var _this;

    _classCallCheck(this, NavigationMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavigationMenu).call(this, props));
    _this.state = {
      menuOpen: false
    };
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_this));
    _this.id = (0, _lodash.default)('navigationMenuButton_');
    return _this;
  }

  _createClass(NavigationMenu, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var containerClasses = (0, _classnames.default)('m-c-navigationMenu__container', this.props.alwaysShowMenuButton && 'm-c-navigationMenu__container--alwaysShowMenuButton');
      var navClasses = (0, _classnames.default)('m-c-navigationMenu', this.state.menuOpen && 'm-c-navigationMenu--open');
      return _react.default.createElement("div", {
        className: containerClasses
      }, _react.default.createElement("div", {
        className: "m-c-navigationMenu__toggleContainer"
      }, _react.default.createElement(_components.Button, {
        id: this.id,
        "aria-expanded": !!this.state.menuOpen,
        "aria-haspopup": "true",
        "aria-owns": "menu-container",
        className: "m-c-navigationMenu__mobileToggle",
        onClick: this.toggleMenu,
        variation: "transparent"
      }, this.state.menuOpen ? _react.default.createElement(_CloseSymbol.default, null) : _react.default.createElement(_HamburgerSymbol.default, null))), _react.default.createElement("nav", {
        role: "navigation",
        id: "menu-container",
        "aria-labelledby": this.id,
        className: navClasses
      }, _react.default.createElement("ul", {
        className: "m-c-navigationMenu__list"
      }, this.props.children)));
    }
  }]);

  return NavigationMenu;
}(_react.default.PureComponent);

exports.default = NavigationMenu;