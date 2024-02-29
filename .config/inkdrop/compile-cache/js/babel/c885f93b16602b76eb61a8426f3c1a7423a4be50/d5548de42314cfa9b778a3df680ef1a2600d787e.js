"use strict";
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _inkdrop = require("inkdrop");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ImportHTMLSelectNotebookDialog = _props => {
  const {
    NotebookListBar
  } = inkdrop.components.classes;
  const modal = (0, _inkdrop.useModal)();
  const {
    Dialog
  } = inkdrop.components.classes;
  const showDialog = (0, _react.useCallback)(() => {
    modal.show();
  }, []);
  const importHTMLFile = (0, _react.useCallback)(async destBookId => {
    const {
      openImportDialog,
      importHTMLFromMultipleFiles
    } = require('./importer');
    const {
      filePaths
    } = await openImportDialog();
    if (filePaths) {
      modal.close();
      await importHTMLFromMultipleFiles(filePaths, destBookId);
    } else {
      return false;
    }
  }, []);
  const handleNotebookSelect = (0, _react.useCallback)(bookId => {
    importHTMLFile(bookId);
  }, [importHTMLFile]);
  (0, _react.useEffect)(() => {
    const sub = inkdrop.commands.add(document.body, {
      'import-html:import-from-file': showDialog
    });
    return () => sub.dispose();
  }, [showDialog]);
  return /*#__PURE__*/_react.default.createElement(Dialog, _extends({}, modal.state, {
    onBackdropClick: modal.close,
    className: "import-html-select-notebook-dialog"
  }), /*#__PURE__*/_react.default.createElement(Dialog.Title, null, "Import Notes from HTML"), /*#__PURE__*/_react.default.createElement(Dialog.Content, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "ui message"
  }, "Please select a notebook"), /*#__PURE__*/_react.default.createElement("div", {
    className: "ui form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "field"
  }, /*#__PURE__*/_react.default.createElement(NotebookListBar, {
    onItemSelect: handleNotebookSelect
  })))), /*#__PURE__*/_react.default.createElement(Dialog.Actions, {
    className: "right aligned"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "ui button",
    onClick: modal.close
  }, "Cancel")));
};
var _default = ImportHTMLSelectNotebookDialog;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJbXBvcnRIVE1MU2VsZWN0Tm90ZWJvb2tEaWFsb2ciLCJfcHJvcHMiLCJOb3RlYm9va0xpc3RCYXIiLCJpbmtkcm9wIiwiY29tcG9uZW50cyIsImNsYXNzZXMiLCJtb2RhbCIsInVzZU1vZGFsIiwiRGlhbG9nIiwic2hvd0RpYWxvZyIsInVzZUNhbGxiYWNrIiwic2hvdyIsImltcG9ydEhUTUxGaWxlIiwiZGVzdEJvb2tJZCIsIm9wZW5JbXBvcnREaWFsb2ciLCJpbXBvcnRIVE1MRnJvbU11bHRpcGxlRmlsZXMiLCJyZXF1aXJlIiwiZmlsZVBhdGhzIiwiY2xvc2UiLCJoYW5kbGVOb3RlYm9va1NlbGVjdCIsImJvb2tJZCIsInVzZUVmZmVjdCIsInN1YiIsImNvbW1hbmRzIiwiYWRkIiwiZG9jdW1lbnQiLCJib2R5IiwiZGlzcG9zZSIsInN0YXRlIl0sInNvdXJjZXMiOlsic2VsZWN0LWJvb2stZGlhbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ2lua2Ryb3AnXG5cbmNvbnN0IEltcG9ydEhUTUxTZWxlY3ROb3RlYm9va0RpYWxvZyA9IF9wcm9wcyA9PiB7XG4gIGNvbnN0IHsgTm90ZWJvb2tMaXN0QmFyIH0gPSBpbmtkcm9wLmNvbXBvbmVudHMuY2xhc3Nlc1xuICBjb25zdCBtb2RhbCA9IHVzZU1vZGFsKClcbiAgY29uc3QgeyBEaWFsb2cgfSA9IGlua2Ryb3AuY29tcG9uZW50cy5jbGFzc2VzXG5cbiAgY29uc3Qgc2hvd0RpYWxvZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBtb2RhbC5zaG93KClcbiAgfSwgW10pXG5cbiAgY29uc3QgaW1wb3J0SFRNTEZpbGUgPSB1c2VDYWxsYmFjayhhc3luYyBkZXN0Qm9va0lkID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBvcGVuSW1wb3J0RGlhbG9nLFxuICAgICAgaW1wb3J0SFRNTEZyb21NdWx0aXBsZUZpbGVzXG4gICAgfSA9IHJlcXVpcmUoJy4vaW1wb3J0ZXInKVxuICAgIGNvbnN0IHsgZmlsZVBhdGhzIH0gPSBhd2FpdCBvcGVuSW1wb3J0RGlhbG9nKClcbiAgICBpZiAoZmlsZVBhdGhzKSB7XG4gICAgICBtb2RhbC5jbG9zZSgpXG4gICAgICBhd2FpdCBpbXBvcnRIVE1MRnJvbU11bHRpcGxlRmlsZXMoZmlsZVBhdGhzLCBkZXN0Qm9va0lkKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZU5vdGVib29rU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgYm9va0lkID0+IHtcbiAgICAgIGltcG9ydEhUTUxGaWxlKGJvb2tJZClcbiAgICB9LFxuICAgIFtpbXBvcnRIVE1MRmlsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3ViID0gaW5rZHJvcC5jb21tYW5kcy5hZGQoZG9jdW1lbnQuYm9keSwge1xuICAgICAgJ2ltcG9ydC1odG1sOmltcG9ydC1mcm9tLWZpbGUnOiBzaG93RGlhbG9nXG4gICAgfSlcbiAgICByZXR1cm4gKCkgPT4gc3ViLmRpc3Bvc2UoKVxuICB9LCBbc2hvd0RpYWxvZ10pXG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nXG4gICAgICB7Li4ubW9kYWwuc3RhdGV9XG4gICAgICBvbkJhY2tkcm9wQ2xpY2s9e21vZGFsLmNsb3NlfVxuICAgICAgY2xhc3NOYW1lPVwiaW1wb3J0LWh0bWwtc2VsZWN0LW5vdGVib29rLWRpYWxvZ1wiXG4gICAgPlxuICAgICAgPERpYWxvZy5UaXRsZT5JbXBvcnQgTm90ZXMgZnJvbSBIVE1MPC9EaWFsb2cuVGl0bGU+XG4gICAgICA8RGlhbG9nLkNvbnRlbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgbWVzc2FnZVwiPlBsZWFzZSBzZWxlY3QgYSBub3RlYm9vazwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICA8Tm90ZWJvb2tMaXN0QmFyIG9uSXRlbVNlbGVjdD17aGFuZGxlTm90ZWJvb2tTZWxlY3R9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9EaWFsb2cuQ29udGVudD5cbiAgICAgIDxEaWFsb2cuQWN0aW9ucyBjbGFzc05hbWU9XCJyaWdodCBhbGlnbmVkXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidWkgYnV0dG9uXCIgb25DbGljaz17bW9kYWwuY2xvc2V9PlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRGlhbG9nLkFjdGlvbnM+XG4gICAgPC9EaWFsb2c+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0SFRNTFNlbGVjdE5vdGVib29rRGlhbG9nXG4iXSwibWFwcGluZ3MiOiI7QUFBQSxXQUFXOztBQUFBO0VBQUE7QUFBQTtBQUFBO0FBRVg7QUFDQTtBQUFrQztBQUFBO0FBQUE7QUFFbEMsTUFBTUEsOEJBQThCLEdBQUdDLE1BQU0sSUFBSTtFQUMvQyxNQUFNO0lBQUVDO0VBQWdCLENBQUMsR0FBR0MsT0FBTyxDQUFDQyxVQUFVLENBQUNDLE9BQU87RUFDdEQsTUFBTUMsS0FBSyxHQUFHLElBQUFDLGlCQUFRLEdBQUU7RUFDeEIsTUFBTTtJQUFFQztFQUFPLENBQUMsR0FBR0wsT0FBTyxDQUFDQyxVQUFVLENBQUNDLE9BQU87RUFFN0MsTUFBTUksVUFBVSxHQUFHLElBQUFDLGtCQUFXLEVBQUMsTUFBTTtJQUNuQ0osS0FBSyxDQUFDSyxJQUFJLEVBQUU7RUFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sTUFBTUMsY0FBYyxHQUFHLElBQUFGLGtCQUFXLEVBQUMsTUFBTUcsVUFBVSxJQUFJO0lBQ3JELE1BQU07TUFDSkMsZ0JBQWdCO01BQ2hCQztJQUNGLENBQUMsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztJQUN6QixNQUFNO01BQUVDO0lBQVUsQ0FBQyxHQUFHLE1BQU1ILGdCQUFnQixFQUFFO0lBQzlDLElBQUlHLFNBQVMsRUFBRTtNQUNiWCxLQUFLLENBQUNZLEtBQUssRUFBRTtNQUNiLE1BQU1ILDJCQUEyQixDQUFDRSxTQUFTLEVBQUVKLFVBQVUsQ0FBQztJQUMxRCxDQUFDLE1BQU07TUFDTCxPQUFPLEtBQUs7SUFDZDtFQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixNQUFNTSxvQkFBb0IsR0FBRyxJQUFBVCxrQkFBVyxFQUN0Q1UsTUFBTSxJQUFJO0lBQ1JSLGNBQWMsQ0FBQ1EsTUFBTSxDQUFDO0VBQ3hCLENBQUMsRUFDRCxDQUFDUixjQUFjLENBQUMsQ0FDakI7RUFFRCxJQUFBUyxnQkFBUyxFQUFDLE1BQU07SUFDZCxNQUFNQyxHQUFHLEdBQUduQixPQUFPLENBQUNvQixRQUFRLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQUU7TUFDOUMsOEJBQThCLEVBQUVqQjtJQUNsQyxDQUFDLENBQUM7SUFDRixPQUFPLE1BQU1hLEdBQUcsQ0FBQ0ssT0FBTyxFQUFFO0VBQzVCLENBQUMsRUFBRSxDQUFDbEIsVUFBVSxDQUFDLENBQUM7RUFFaEIsb0JBQ0UsNkJBQUMsTUFBTSxlQUNESCxLQUFLLENBQUNzQixLQUFLO0lBQ2YsZUFBZSxFQUFFdEIsS0FBSyxDQUFDWSxLQUFNO0lBQzdCLFNBQVMsRUFBQztFQUFvQyxpQkFFOUMsNkJBQUMsTUFBTSxDQUFDLEtBQUssaUNBQXNDLGVBQ25ELDZCQUFDLE1BQU0sQ0FBQyxPQUFPLHFCQUNiO0lBQUssU0FBUyxFQUFDO0VBQVksOEJBQStCLGVBQzFEO0lBQUssU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCO0lBQUssU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCLDZCQUFDLGVBQWU7SUFBQyxZQUFZLEVBQUVDO0VBQXFCLEVBQUcsQ0FDbkQsQ0FDRixDQUNTLGVBQ2pCLDZCQUFDLE1BQU0sQ0FBQyxPQUFPO0lBQUMsU0FBUyxFQUFDO0VBQWUsZ0JBQ3ZDO0lBQVEsU0FBUyxFQUFDLFdBQVc7SUFBQyxPQUFPLEVBQUViLEtBQUssQ0FBQ1k7RUFBTSxZQUUxQyxDQUNNLENBQ1Y7QUFFYixDQUFDO0FBQUEsZUFFY2xCLDhCQUE4QjtBQUFBIn0=