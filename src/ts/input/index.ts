import { Input } from "./classes/input";
import { Selection } from "./classes/selection";
import { formatPhone } from "./functions/formatPhone";
import { selectEvent } from "./events/select";
import { pasteEvent } from "./events/paste";
import { keyDownEvent } from "./events/keyDown";
import { inputEvent } from "./events/input";
import { Array } from "./classes/array";


export const superMask = () => {
  const input = new Input;
  const array = new Array;
  const selection = new Selection;

  input
    .default(formatPhone());
  array
    .define(input.array());
  
  input
    .element
    .addEventListener("select", (e) => selectEvent(e, selection));
  
  input
    .element
    .addEventListener("paste", (e) => pasteEvent(e, input, array));

  input
    .element
    .addEventListener("keydown", (e) => keyDownEvent(e, input, array));

  input
    .element
    .addEventListener("input", (e) => inputEvent(e, input, array, selection));
}