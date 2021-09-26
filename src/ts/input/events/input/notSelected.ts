import { moveBackwards } from "../../functions/moveBackwards";
import { typing } from "../../functions/typing";
import { Array } from "../../classes/array";
import { Input } from "../../classes/input";

export const ifNotSelected = (
  e: Event,
  input: Input,
  array: Array
) => {
  const char = e instanceof InputEvent && e.data;
  const curPos = char ? input.position() - 1 : input.position();

  array.value.splice(curPos, 1, typing(array.value, curPos, char));
  input.value(array.string());

  if (char) {
    input
      .element  
      .setSelectionRange(
        array.value.indexOf('_'), array.value.indexOf('_')
      );
  }
  else { moveBackwards(array.value, curPos, input) }
}