import { Array } from "../classes/array";
import { Input } from "../classes/input";

export const pasteEvent = (
  e: ClipboardEvent,
  input: Input,
  array: Array
) => {
  e.preventDefault();

  const clipboardData = e.clipboardData;
  const pasted = clipboardData?.getData('Text');
  const pastedDigitsArr = pasted.match(/\d/g);

  pastedDigitsArr?.splice(
    array
      .value
      .filter(x => x === '_').length
  );

  pastedDigitsArr?.forEach(char => {
    array
      .value
      .splice(array.value.indexOf('_'), 1, char)
  });

  input
    .value(array.string());
  input
    .element
    .setSelectionRange(
      array.value.indexOf('_'), 
      array.value.indexOf('_')
    );
}