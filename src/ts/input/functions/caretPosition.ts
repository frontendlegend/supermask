export const caretPosition = (field: HTMLInputElement) => {
  let carPos = 0;

  if (field.selectionStart || field.selectionStart === 0) {
    carPos = field.selectionDirection === 'backward'
      ? field.selectionStart
      : field.selectionEnd;
  }

  return carPos
}