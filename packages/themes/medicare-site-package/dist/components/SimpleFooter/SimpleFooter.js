"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HHSlogo = _interopRequireDefault(require("../HHSlogo/HHSlogo"));

var _MedicaregovLogo = _interopRequireDefault(require("../MedicaregovLogo/MedicaregovLogo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleFooter = function SimpleFooter(_ref) {
  var aboutMedicareLabel = _ref.aboutMedicareLabel,
      medicareGlossaryLabel = _ref.medicareGlossaryLabel,
      nondiscriminationLabel = _ref.nondiscriminationLabel,
      privacyPolicyLabel = _ref.privacyPolicyLabel,
      privacySettingLabel = _ref.privacySettingLabel,
      linkingPolicyLabel = _ref.linkingPolicyLabel,
      usingThisSiteLabel = _ref.usingThisSiteLabel,
      plainWritingLabel = _ref.plainWritingLabel,
      websiteInfo = _ref.websiteInfo;
  return _react.default.createElement("footer", {
    className: "m-c-footer"
  }, _react.default.createElement("div", {
    className: "m-c-footer__linkRow"
  }, _react.default.createElement("div", {
    className: "ds-u-margin-bottom--3 ds-u-xl-margin-bottom--0"
  }, _react.default.createElement("a", {
    href: "https://www.medicare.gov/about-us"
  }, aboutMedicareLabel || 'About Medicare'), _react.default.createElement("a", {
    href: "https://www.medicare.gov/glossary/a"
  }, medicareGlossaryLabel || 'Medicare Glossary')), _react.default.createElement("div", null, _react.default.createElement("a", {
    href: "https://www.medicare.gov/about-us/accessibility-nondiscrimination-notice"
  }, nondiscriminationLabel || 'Nondiscrimination/Accessibility'), _react.default.createElement("a", {
    href: "https://www.medicare.gov/privacy-policy"
  }, privacyPolicyLabel || 'Privacy Policy'), _react.default.createElement("a", {
    href: "#",
    onClick: function onClick() {
      if (utag && utag.gdpr && utag.gdpr.showConsentPreferences && typeof utag.gdpr.showConsentPreferences === 'function') {
        utag.gdpr.showConsentPreferences();
      }
    }
  }, privacySettingLabel || 'Privacy Setting'), _react.default.createElement("a", {
    href: "https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/index.html"
  }, linkingPolicyLabel || 'Linking Policy'), _react.default.createElement("a", {
    href: "https://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/Help.html"
  }, usingThisSiteLabel || 'Using this site'), _react.default.createElement("a", {
    href: "https://www.medicare.gov/about-us/plain-writing"
  }, plainWritingLabel || 'Plain Writing'))), _react.default.createElement("div", {
    className: "m-c-footer__identityRow"
  }, _react.default.createElement(_MedicaregovLogo.default, null), _react.default.createElement("div", {
    className: "m-c-footer__identityContent"
  }, _react.default.createElement(_HHSlogo.default, null), _react.default.createElement("span", {
    className: "m-c-footer__contactAddress"
  }, websiteInfo || 'A federal government website managed and paid for by the U.S. Centers for Medicare and Medicaid Services.', _react.default.createElement("br", null), "7500 Security Boulevard, Baltimore, MD 21244"))));
};

var _default = SimpleFooter;
exports.default = _default;