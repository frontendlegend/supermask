import { moveForward } from "../functions/moveForward";
import { Array } from "../classes/array";
import { Input } from "../classes/input";

export const keyDownEvent = (
  e: KeyboardEvent,
  input: Input,
  array: Array
) => {
  e.stopPropagation();

  const curPos = input.position();
  const notTypingKeys = ['Backspace', 'ArrowLeft', 'ArrowRight'];
  
  if (notTypingKeys.indexOf(e.key) === -1 && array.value[curPos]) {
    moveForward(array.value, curPos, input)
  }
}