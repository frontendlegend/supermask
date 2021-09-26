import { SelectInt } from "../../types/selection";

export const selectEvent = (
  e: Event,
  selection: SelectInt
) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;

  selection.state = {
    selectStart: target.selectionStart,
    selectEnd: target.selectionEnd,
    selected: value.substring(target.selectionStart, target.selectionEnd)
  }

  console.log(selection.state)
}