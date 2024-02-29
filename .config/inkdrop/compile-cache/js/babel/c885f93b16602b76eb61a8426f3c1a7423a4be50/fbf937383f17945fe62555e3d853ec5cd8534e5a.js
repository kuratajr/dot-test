"use strict";
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ImportMarkdownSelectNotebookDialog = ({
  modal,
  onSelect
}) => {
  const {
    NotebookListBar
  } = inkdrop.components.classes;
  const {
    Dialog
  } = inkdrop.components.classes;
  return /*#__PURE__*/_react.default.createElement(Dialog, _extends({}, modal.state, {
    onBackdropClick: modal.close,
    className: "import-markdown-select-notebook-dialog"
  }), /*#__PURE__*/_react.default.createElement(Dialog.Title, null, "Import Notes from Markdown"), /*#__PURE__*/_react.default.createElement(Dialog.Content, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui message"
  }, "Please select a notebook"), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(NotebookListBar, {
    showRoot: true,
    onItemSelect: onSelect
  })))), /*#__PURE__*/_react.default.createElement(Dialog.Actions, {
    className: "right aligned"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ui button",
    onClick: modal.close
  }, "Cancel")));
};
var _default = ImportMarkdownSelectNotebookDialog;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJbXBvcnRNYXJrZG93blNlbGVjdE5vdGVib29rRGlhbG9nIiwibW9kYWwiLCJvblNlbGVjdCIsIk5vdGVib29rTGlzdEJhciIsImlua2Ryb3AiLCJjb21wb25lbnRzIiwiY2xhc3NlcyIsIkRpYWxvZyIsInN0YXRlIiwiY2xvc2UiXSwic291cmNlcyI6WyJzZWxlY3QtYm9vay1kaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbXBvcnRNYXJrZG93blNlbGVjdE5vdGVib29rRGlhbG9nID0gKHsgbW9kYWwsIG9uU2VsZWN0IH0pID0+IHtcbiAgY29uc3QgeyBOb3RlYm9va0xpc3RCYXIgfSA9IGlua2Ryb3AuY29tcG9uZW50cy5jbGFzc2VzXG4gIGNvbnN0IHsgRGlhbG9nIH0gPSBpbmtkcm9wLmNvbXBvbmVudHMuY2xhc3Nlc1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZ1xuICAgICAgey4uLm1vZGFsLnN0YXRlfVxuICAgICAgb25CYWNrZHJvcENsaWNrPXttb2RhbC5jbG9zZX1cbiAgICAgIGNsYXNzTmFtZT1cImltcG9ydC1tYXJrZG93bi1zZWxlY3Qtbm90ZWJvb2stZGlhbG9nXCJcbiAgICA+XG4gICAgICA8RGlhbG9nLlRpdGxlPkltcG9ydCBOb3RlcyBmcm9tIE1hcmtkb3duPC9EaWFsb2cuVGl0bGU+XG4gICAgICA8RGlhbG9nLkNvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgbWVzc2FnZVwiPlBsZWFzZSBzZWxlY3QgYSBub3RlYm9vazwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8Tm90ZWJvb2tMaXN0QmFyIHNob3dSb290IG9uSXRlbVNlbGVjdD17b25TZWxlY3R9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EaWFsb2cuQ29udGVudD5cbiAgICAgIDxEaWFsb2cuQWN0aW9ucyBjbGFzc05hbWU9XCJyaWdodCBhbGlnbmVkXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgb25DbGljaz17bW9kYWwuY2xvc2V9PlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRGlhbG9nLkFjdGlvbnM+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0TWFya2Rvd25TZWxlY3ROb3RlYm9va0RpYWxvZ1xuIl0sIm1hcHBpbmdzIjoiO0FBQUEsV0FBVzs7QUFBQTtFQUFBO0FBQUE7QUFBQTtBQUVYO0FBQXlCO0FBQUE7QUFFekIsTUFBTUEsa0NBQWtDLEdBQUcsQ0FBQztFQUFFQyxLQUFLO0VBQUVDO0FBQVMsQ0FBQyxLQUFLO0VBQ2xFLE1BQU07SUFBRUM7RUFBZ0IsQ0FBQyxHQUFHQyxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTztFQUN0RCxNQUFNO0lBQUVDO0VBQU8sQ0FBQyxHQUFHSCxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTztFQUU3QyxvQkFDRSw2QkFBQyxNQUFNLGVBQ0RMLEtBQUssQ0FBQ08sS0FBSztJQUNmLGVBQWUsRUFBRVAsS0FBSyxDQUFDUSxLQUFNO0lBQzdCLFNBQVMsRUFBQztFQUF3QyxpQkFFbEQsNkJBQUMsTUFBTSxDQUFDLEtBQUsscUNBQTBDLGVBQ3ZELDZCQUFDLE1BQU0sQ0FBQyxPQUFPLHFCQUNiO0lBQUssU0FBUyxFQUFDO0VBQVksOEJBQStCLGVBQzFEO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCO0lBQUssU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCLDZCQUFDLGVBQWU7SUFBQyxRQUFRO0lBQUMsWUFBWSxFQUFFUDtFQUFTLEVBQUcsQ0FDaEQsQ0FDRixDQUNTLGVBQ2pCLDZCQUFDLE1BQU0sQ0FBQyxPQUFPO0lBQUMsU0FBUyxFQUFDO0VBQWUsZ0JBQ3ZDO0lBQVEsU0FBUyxFQUFDLFdBQVc7SUFBQyxPQUFPLEVBQUVELEtBQUssQ0FBQ1E7RUFBTSxZQUUxQyxDQUNNLENBQ1Y7QUFFYixDQUFDO0FBQUEsZUFFY1Qsa0NBQWtDO0FBQUEifQ==