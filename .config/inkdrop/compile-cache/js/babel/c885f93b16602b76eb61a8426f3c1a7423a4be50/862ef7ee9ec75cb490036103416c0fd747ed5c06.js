"use strict";
'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;
exports.deactivate = deactivate;
var _react = _interopRequireWildcard(require("react"));
var _inkdrop = require("inkdrop");
var _selectBookDialog = _interopRequireDefault(require("./select-book-dialog"));
var _path = _interopRequireDefault(require("path"));
var _progressDialog = _interopRequireDefault(require("./progress-dialog"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ImportMarkdownPlugin = () => {
  const [status, setStatus] = (0, _react.useState)('');
  const [tooLargeFiles, setTooLargeFiles] = (0, _react.useState)([]);
  const [processingFilePath, setProcessingFilePath] = (0, _react.useState)('');
  const [importError, setImportError] = (0, _react.useState)(null);
  const selectNotebookDialog = (0, _inkdrop.useModal)();
  const progressDialog = (0, _inkdrop.useModal)();
  const showDialog = (0, _react.useCallback)(() => {
    selectNotebookDialog.show();
  }, []);
  const handleNotebookSelected = (0, _react.useCallback)(async destBookId => {
    const {
      openImportDialog,
      checkSizeOfFiles,
      importMarkdownFromMultipleFilesAndDirectories
    } = require('./importer');
    const {
      filePaths
    } = await openImportDialog({
      isFolderOnly: destBookId === null
    });
    if (filePaths instanceof Array && filePaths.length > 0) {
      setStatus('Scanning files..');
      progressDialog.show();
      const [_totalSize, fileErrors] = checkSizeOfFiles(filePaths);
      if (fileErrors.length > 0) {
        setTooLargeFiles(fileErrors);
      } else {
        try {
          selectNotebookDialog.close();
          setStatus('Importing files..');
          await importMarkdownFromMultipleFilesAndDirectories(filePaths, destBookId, filePath => {
            setProcessingFilePath(filePath);
            setStatus(`Importing file.. ${_path.default.basename(filePath)}`);
          }, {
            root: true
          });
          setStatus('✅ Importing Markdown files completed!');
          setTimeout(progressDialog.close, 2000);
        } catch (e) {
          setImportError(e);
        }
      }
    }
  }, []);
  (0, _react.useEffect)(() => {
    const sub = inkdrop.commands.add(document.body, {
      'import-markdown:import-from-file': showDialog
    });
    return () => sub.dispose();
  }, [showDialog]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_selectBookDialog.default, {
    modal: selectNotebookDialog,
    onSelect: handleNotebookSelected
  }), /*#__PURE__*/_react.default.createElement(_progressDialog.default, {
    modal: progressDialog,
    status: status,
    tooLargeFiles: tooLargeFiles,
    importingFilePath: processingFilePath,
    importError: importError
  }));
};
function activate() {
  inkdrop.components.registerClass(ImportMarkdownPlugin);
  inkdrop.layouts.addComponentToLayout('modal', 'ImportMarkdownPlugin');
}
function deactivate() {
  inkdrop.layouts.removeComponentFromLayout('modal', 'ImportMarkdownPlugin');
  inkdrop.components.deleteClass(ImportMarkdownPlugin);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJbXBvcnRNYXJrZG93blBsdWdpbiIsInN0YXR1cyIsInNldFN0YXR1cyIsInVzZVN0YXRlIiwidG9vTGFyZ2VGaWxlcyIsInNldFRvb0xhcmdlRmlsZXMiLCJwcm9jZXNzaW5nRmlsZVBhdGgiLCJzZXRQcm9jZXNzaW5nRmlsZVBhdGgiLCJpbXBvcnRFcnJvciIsInNldEltcG9ydEVycm9yIiwic2VsZWN0Tm90ZWJvb2tEaWFsb2ciLCJ1c2VNb2RhbCIsInByb2dyZXNzRGlhbG9nIiwic2hvd0RpYWxvZyIsInVzZUNhbGxiYWNrIiwic2hvdyIsImhhbmRsZU5vdGVib29rU2VsZWN0ZWQiLCJkZXN0Qm9va0lkIiwib3BlbkltcG9ydERpYWxvZyIsImNoZWNrU2l6ZU9mRmlsZXMiLCJpbXBvcnRNYXJrZG93bkZyb21NdWx0aXBsZUZpbGVzQW5kRGlyZWN0b3JpZXMiLCJyZXF1aXJlIiwiZmlsZVBhdGhzIiwiaXNGb2xkZXJPbmx5IiwiQXJyYXkiLCJsZW5ndGgiLCJfdG90YWxTaXplIiwiZmlsZUVycm9ycyIsImNsb3NlIiwiZmlsZVBhdGgiLCJwYXRoIiwiYmFzZW5hbWUiLCJyb290Iiwic2V0VGltZW91dCIsImUiLCJ1c2VFZmZlY3QiLCJzdWIiLCJpbmtkcm9wIiwiY29tbWFuZHMiLCJhZGQiLCJkb2N1bWVudCIsImJvZHkiLCJkaXNwb3NlIiwiYWN0aXZhdGUiLCJjb21wb25lbnRzIiwicmVnaXN0ZXJDbGFzcyIsImxheW91dHMiLCJhZGRDb21wb25lbnRUb0xheW91dCIsImRlYWN0aXZhdGUiLCJyZW1vdmVDb21wb25lbnRGcm9tTGF5b3V0IiwiZGVsZXRlQ2xhc3MiXSwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnaW5rZHJvcCdcbmltcG9ydCBTZWxlY3ROb3RlYm9va0RpYWxvZyBmcm9tICcuL3NlbGVjdC1ib29rLWRpYWxvZydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgUHJvZ3Jlc3NEaWFsb2cgZnJvbSAnLi9wcm9ncmVzcy1kaWFsb2cnXG5cbmV4cG9ydCB7IGFjdGl2YXRlLCBkZWFjdGl2YXRlIH1cblxuY29uc3QgSW1wb3J0TWFya2Rvd25QbHVnaW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Rvb0xhcmdlRmlsZXMsIHNldFRvb0xhcmdlRmlsZXNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtwcm9jZXNzaW5nRmlsZVBhdGgsIHNldFByb2Nlc3NpbmdGaWxlUGF0aF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ltcG9ydEVycm9yLCBzZXRJbXBvcnRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBzZWxlY3ROb3RlYm9va0RpYWxvZyA9IHVzZU1vZGFsKClcbiAgY29uc3QgcHJvZ3Jlc3NEaWFsb2cgPSB1c2VNb2RhbCgpXG5cbiAgY29uc3Qgc2hvd0RpYWxvZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZWxlY3ROb3RlYm9va0RpYWxvZy5zaG93KClcbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlTm90ZWJvb2tTZWxlY3RlZCA9IHVzZUNhbGxiYWNrKGFzeW5jIGRlc3RCb29rSWQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wZW5JbXBvcnREaWFsb2csXG4gICAgICBjaGVja1NpemVPZkZpbGVzLFxuICAgICAgaW1wb3J0TWFya2Rvd25Gcm9tTXVsdGlwbGVGaWxlc0FuZERpcmVjdG9yaWVzXG4gICAgfSA9IHJlcXVpcmUoJy4vaW1wb3J0ZXInKVxuICAgIGNvbnN0IHsgZmlsZVBhdGhzIH0gPSBhd2FpdCBvcGVuSW1wb3J0RGlhbG9nKHtcbiAgICAgIGlzRm9sZGVyT25seTogZGVzdEJvb2tJZCA9PT0gbnVsbFxuICAgIH0pXG4gICAgaWYgKGZpbGVQYXRocyBpbnN0YW5jZW9mIEFycmF5ICYmIGZpbGVQYXRocy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRTdGF0dXMoJ1NjYW5uaW5nIGZpbGVzLi4nKVxuICAgICAgcHJvZ3Jlc3NEaWFsb2cuc2hvdygpXG4gICAgICBjb25zdCBbX3RvdGFsU2l6ZSwgZmlsZUVycm9yc10gPSBjaGVja1NpemVPZkZpbGVzKGZpbGVQYXRocylcbiAgICAgIGlmIChmaWxlRXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0VG9vTGFyZ2VGaWxlcyhmaWxlRXJyb3JzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzZWxlY3ROb3RlYm9va0RpYWxvZy5jbG9zZSgpXG4gICAgICAgICAgc2V0U3RhdHVzKCdJbXBvcnRpbmcgZmlsZXMuLicpXG4gICAgICAgICAgYXdhaXQgaW1wb3J0TWFya2Rvd25Gcm9tTXVsdGlwbGVGaWxlc0FuZERpcmVjdG9yaWVzKFxuICAgICAgICAgICAgZmlsZVBhdGhzLFxuICAgICAgICAgICAgZGVzdEJvb2tJZCxcbiAgICAgICAgICAgIGZpbGVQYXRoID0+IHtcbiAgICAgICAgICAgICAgc2V0UHJvY2Vzc2luZ0ZpbGVQYXRoKGZpbGVQYXRoKVxuICAgICAgICAgICAgICBzZXRTdGF0dXMoYEltcG9ydGluZyBmaWxlLi4gJHtwYXRoLmJhc2VuYW1lKGZpbGVQYXRoKX1gKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgcm9vdDogdHJ1ZSB9XG4gICAgICAgICAgKVxuICAgICAgICAgIHNldFN0YXR1cygn4pyFIEltcG9ydGluZyBNYXJrZG93biBmaWxlcyBjb21wbGV0ZWQhJylcbiAgICAgICAgICBzZXRUaW1lb3V0KHByb2dyZXNzRGlhbG9nLmNsb3NlLCAyMDAwKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgc2V0SW1wb3J0RXJyb3IoZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdWIgPSBpbmtkcm9wLmNvbW1hbmRzLmFkZChkb2N1bWVudC5ib2R5LCB7XG4gICAgICAnaW1wb3J0LW1hcmtkb3duOmltcG9ydC1mcm9tLWZpbGUnOiBzaG93RGlhbG9nXG4gICAgfSlcbiAgICByZXR1cm4gKCkgPT4gc3ViLmRpc3Bvc2UoKVxuICB9LCBbc2hvd0RpYWxvZ10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlbGVjdE5vdGVib29rRGlhbG9nXG4gICAgICAgIG1vZGFsPXtzZWxlY3ROb3RlYm9va0RpYWxvZ31cbiAgICAgICAgb25TZWxlY3Q9e2hhbmRsZU5vdGVib29rU2VsZWN0ZWR9XG4gICAgICAvPlxuICAgICAgPFByb2dyZXNzRGlhbG9nXG4gICAgICAgIG1vZGFsPXtwcm9ncmVzc0RpYWxvZ31cbiAgICAgICAgc3RhdHVzPXtzdGF0dXN9XG4gICAgICAgIHRvb0xhcmdlRmlsZXM9e3Rvb0xhcmdlRmlsZXN9XG4gICAgICAgIGltcG9ydGluZ0ZpbGVQYXRoPXtwcm9jZXNzaW5nRmlsZVBhdGh9XG4gICAgICAgIGltcG9ydEVycm9yPXtpbXBvcnRFcnJvcn1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gIGlua2Ryb3AuY29tcG9uZW50cy5yZWdpc3RlckNsYXNzKEltcG9ydE1hcmtkb3duUGx1Z2luKVxuICBpbmtkcm9wLmxheW91dHMuYWRkQ29tcG9uZW50VG9MYXlvdXQoJ21vZGFsJywgJ0ltcG9ydE1hcmtkb3duUGx1Z2luJylcbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbiAgaW5rZHJvcC5sYXlvdXRzLnJlbW92ZUNvbXBvbmVudEZyb21MYXlvdXQoJ21vZGFsJywgJ0ltcG9ydE1hcmtkb3duUGx1Z2luJylcbiAgaW5rZHJvcC5jb21wb25lbnRzLmRlbGV0ZUNsYXNzKEltcG9ydE1hcmtkb3duUGx1Z2luKVxu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