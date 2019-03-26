export const copyToClipboard = inputRef => {
  if (window.clipboardData) {
    window.clipboardData.setData('Text', inputRef.value);
    return;
  }

  inputRef.select();
  document.execCommand('copy');
  inputRef.selectionEnd = inputRef.selectionStart;
  inputRef.blur();
};
