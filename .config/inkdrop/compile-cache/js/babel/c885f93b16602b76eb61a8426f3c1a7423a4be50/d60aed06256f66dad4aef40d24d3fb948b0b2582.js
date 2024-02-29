"use strict";
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const {
  maxAttachmentFileSize
} = require('inkdrop-model');
const ImportMarkdownProgressDialog = ({
  modal,
  tooLargeFiles,
  status,
  importingFilePath,
  importError
}) => {
  const {
    Dialog
  } = inkdrop.components.classes;
  let content = /*#__PURE__*/_react.default.createElement(Dialog.Content, null, /*#__PURE__*/_react.default.createElement("div", null, status));
  if (tooLargeFiles.length > 0) {
    content = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Dialog.Content, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "ui error message"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "header"
    }, "The following files are too large:"), /*#__PURE__*/_react.default.createElement("p", null, "Files larger than ", maxAttachmentFileSize / 1024 / 1024, " MB cannot be imported. Please remove them to proceed."), /*#__PURE__*/_react.default.createElement("pre", null, tooLargeFiles.map(e => /*#__PURE__*/_react.default.createElement("div", {
      key: e
    }, e))))), /*#__PURE__*/_react.default.createElement(Dialog.Actions, {
      className: "right aligned"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "ui button",
      onClick: modal.close
    }, "Close")));
  }
  if (importError) {
    content = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Dialog.Content, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "ui error message"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "header"
    }, "Failed to import the Markdown file"), /*#__PURE__*/_react.default.createElement("p", null, "An unexpected error happened while processing \"", /*#__PURE__*/_react.default.createElement("code", null, importingFilePath), "\"."), /*#__PURE__*/_react.default.createElement("pre", null, importError.stack))), /*#__PURE__*/_react.default.createElement(Dialog.Actions, {
      className: "right aligned"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "ui button",
      onClick: modal.close
    }, "Close")));
  }
  return /*#__PURE__*/_react.default.createElement(Dialog, _extends({}, modal.state, {
    className: "import-markdown-progress-dialog"
  }), content);
};
var _default = ImportMarkdownProgressDialog;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYXhBdHRhY2htZW50RmlsZVNpemUiLCJyZXF1aXJlIiwiSW1wb3J0TWFya2Rvd25Qcm9ncmVzc0RpYWxvZyIsIm1vZGFsIiwidG9vTGFyZ2VGaWxlcyIsInN0YXR1cyIsImltcG9ydGluZ0ZpbGVQYXRoIiwiaW1wb3J0RXJyb3IiLCJEaWFsb2ciLCJpbmtkcm9wIiwiY29tcG9uZW50cyIsImNsYXNzZXMiLCJjb250ZW50IiwibGVuZ3RoIiwibWFwIiwiZSIsImNsb3NlIiwic3RhY2siLCJzdGF0ZSJdLCJzb3VyY2VzIjpbInByb2dyZXNzLWRpYWxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5jb25zdCB7IG1heEF0dGFjaG1lbnRGaWxlU2l6ZSB9ID0gcmVxdWlyZSgnaW5rZHJvcC1tb2RlbCcpXG5cbmNvbnN0IEltcG9ydE1hcmtkb3duUHJvZ3Jlc3NEaWFsb2cgPSAoe1xuICBtb2RhbCxcbiAgdG9vTGFyZ2VGaWxlcyxcbiAgc3RhdHVzLFxuICBpbXBvcnRpbmdGaWxlUGF0aCxcbiAgaW1wb3J0RXJyb3Jcbn0pID0+IHtcbiAgY29uc3QgeyBEaWFsb2cgfSA9IGlua2Ryb3AuY29tcG9uZW50cy5jbGFzc2VzXG5cbiAgbGV0IGNvbnRlbnQgPSAoXG4gICAgPERpYWxvZy5Db250ZW50PlxuICAgICAgPGRpdj57c3RhdHVzfTwvZGl2PlxuICAgIDwvRGlhbG9nLkNvbnRlbnQ+XG4gIClcblxuICBpZiAodG9vTGFyZ2VGaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgY29udGVudCA9IChcbiAgICAgIDw+XG4gICAgICAgIDxEaWFsb2cuQ29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGVycm9yIG1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+VGhlIGZvbGxvd2luZyBmaWxlcyBhcmUgdG9vIGxhcmdlOjwvZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZpbGVzIGxhcmdlciB0aGFuIHttYXhBdHRhY2htZW50RmlsZVNpemUgLyAxMDI0IC8gMTAyNH0gTUIgY2Fubm90XG4gICAgICAgICAgICAgIGJlIGltcG9ydGVkLiBQbGVhc2UgcmVtb3ZlIHRoZW0gdG8gcHJvY2VlZC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgIHt0b29MYXJnZUZpbGVzLm1hcChlID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZX0+e2V9PC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nLkNvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2cuQWN0aW9ucyBjbGFzc05hbWU9XCJyaWdodCBhbGlnbmVkXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1aSBidXR0b25cIiBvbkNsaWNrPXttb2RhbC5jbG9zZX0+XG4gICAgICAgICAgICBDbG9zZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0RpYWxvZy5BY3Rpb25zPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG5cbiAgaWYgKGltcG9ydEVycm9yKSB7XG4gICAgY29udGVudCA9IChcbiAgICAgIDw+XG4gICAgICAgIDxEaWFsb2cuQ29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGVycm9yIG1lc3NhZ2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+RmFpbGVkIHRvIGltcG9ydCB0aGUgTWFya2Rvd24gZmlsZTwvZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFwcGVuZWQgd2hpbGUgcHJvY2Vzc2luZyAmcXVvdDtcbiAgICAgICAgICAgICAgPGNvZGU+e2ltcG9ydGluZ0ZpbGVQYXRofTwvY29kZT4mcXVvdDsuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cHJlPntpbXBvcnRFcnJvci5zdGFja308L3ByZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaWFsb2cuQ29udGVudD5cbiAgICAgICAgPERpYWxvZy5BY3Rpb25zIGNsYXNzTmFtZT1cInJpZ2h0IGFsaWduZWRcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIGJ1dHRvblwiIG9uQ2xpY2s9e21vZGFsLmNsb3NlfT5cbiAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRGlhbG9nLkFjdGlvbnM+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEaWFsb2cgey4uLm1vZGFsLnN0YXRlfSBjbGFzc05hbWU9XCJpbXBvcnQtbWFya2Rvd24tcHJvZ3Jlc3MtZGlhbG9nXCI+XG4gICAgICB7Y29udGVudH1cbiAgICA8L0RpYWxvZz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbXBvcnRNYXJrZG93blByb2dyZXNzRGlhbG9nXG4iXSwibWFwcGluZ3MiOiI7QUFBQSxXQUFXOztBQUFBO0VBQUE7QUFBQTtBQUFBO0FBRVg7QUFBeUI7QUFBQTtBQUN6QixNQUFNO0VBQUVBO0FBQXNCLENBQUMsR0FBR0MsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUUxRCxNQUFNQyw0QkFBNEIsR0FBRyxDQUFDO0VBQ3BDQyxLQUFLO0VBQ0xDLGFBQWE7RUFDYkMsTUFBTTtFQUNOQyxpQkFBaUI7RUFDakJDO0FBQ0YsQ0FBQyxLQUFLO0VBQ0osTUFBTTtJQUFFQztFQUFPLENBQUMsR0FBR0MsT0FBTyxDQUFDQyxVQUFVLENBQUNDLE9BQU87RUFFN0MsSUFBSUMsT0FBTyxnQkFDVCw2QkFBQyxNQUFNLENBQUMsT0FBTyxxQkFDYiwwQ0FBTVAsTUFBTSxDQUFPLENBRXRCO0VBRUQsSUFBSUQsYUFBYSxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQzVCRCxPQUFPLGdCQUNMLHlFQUNFLDZCQUFDLE1BQU0sQ0FBQyxPQUFPLHFCQUNiO01BQUssU0FBUyxFQUFDO0lBQWtCLGdCQUMvQjtNQUFLLFNBQVMsRUFBQztJQUFRLHdDQUF5QyxlQUNoRSw4REFDcUJaLHFCQUFxQixHQUFHLElBQUksR0FBRyxJQUFJLDJEQUVwRCxlQUNKLDBDQUNHSSxhQUFhLENBQUNVLEdBQUcsQ0FBQ0MsQ0FBQyxpQkFDbEI7TUFBSyxHQUFHLEVBQUVBO0lBQUUsR0FBRUEsQ0FBQyxDQUNoQixDQUFDLENBQ0UsQ0FDRixDQUNTLGVBQ2pCLDZCQUFDLE1BQU0sQ0FBQyxPQUFPO01BQUMsU0FBUyxFQUFDO0lBQWUsZ0JBQ3ZDO01BQVEsU0FBUyxFQUFDLFdBQVc7TUFBQyxPQUFPLEVBQUVaLEtBQUssQ0FBQ2E7SUFBTSxXQUUxQyxDQUNNLENBRXBCO0VBQ0g7RUFFQSxJQUFJVCxXQUFXLEVBQUU7SUFDZkssT0FBTyxnQkFDTCx5RUFDRSw2QkFBQyxNQUFNLENBQUMsT0FBTyxxQkFDYjtNQUFLLFNBQVMsRUFBQztJQUFrQixnQkFDL0I7TUFBSyxTQUFTLEVBQUM7SUFBUSx3Q0FBeUMsZUFDaEUseUdBRUUsMkNBQU9OLGlCQUFpQixDQUFRLFFBQzlCLGVBQ0osMENBQU1DLFdBQVcsQ0FBQ1UsS0FBSyxDQUFPLENBQzFCLENBQ1MsZUFDakIsNkJBQUMsTUFBTSxDQUFDLE9BQU87TUFBQyxTQUFTLEVBQUM7SUFBZSxnQkFDdkM7TUFBUSxTQUFTLEVBQUMsV0FBVztNQUFDLE9BQU8sRUFBRWQsS0FBSyxDQUFDYTtJQUFNLFdBRTFDLENBQ00sQ0FFcEI7RUFDSDtFQUVBLG9CQUNFLDZCQUFDLE1BQU0sZUFBS2IsS0FBSyxDQUFDZSxLQUFLO0lBQUUsU0FBUyxFQUFDO0VBQWlDLElBQ2pFTixPQUFPLENBQ0Q7QUFFYixDQUFDO0FBQUEsZUFFY1YsNEJBQTRCO0FBQUEifQ==