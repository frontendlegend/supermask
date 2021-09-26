import { Input } from "../../classes/input";
import { Array } from "../../classes/array";
import { Selection } from "../../classes/selection";
import { ifSelected } from "./selected";
import { ifNotSelected } from "./notSelected";

export const inputEvent = (
  e: Event,
  input: Input,
  array: Array,
  selection: Selection
) => {
  e.preventDefault();

  const digits = input.digits();

  const selectStart = selection.state.selectStart;
  const selected = selection.state.selected;

  if (digits?.length >= 12) {
    input.value(array.string());
  }
  else if (digits?.length !== 12) {
    if (selected) {
      ifSelected(input, array, selection, selectStart, selected)
    }
    else if (!selected) {
      ifNotSelected(e, input, array)
    }
  }
}