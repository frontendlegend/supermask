import { Array } from "../../classes/array";
import { Input } from "../../classes/input";
import { Selection } from "../../classes/selection";

export const ifSelected = (
  input: Input,
  array: Array,
  selection: Selection,
  selectStart: number,
  selected: string,
) => {
  if (selected.match(/^\+[7]/g)) {
    const selectedCut = selected.substring(2);
    const arrCut = array.value.splice(2);

    selectedCut.split("").forEach((char, idx) => {
      if (/\d/.test(char)) {
        arrCut.splice(selectStart + idx, 1, '_')
      }
      else if (!/\d/.test(char)) {
        arrCut.splice(selectStart + idx, 1, arrCut[selectStart + idx])
      }
    });

    array.value = array.value.concat(arrCut);
    input.value(array.string());
  
    selection.state.selected = "";
  }
  else { 
    selected.split("").forEach((char, idx) => {
      if (/\d/.test(char)) {
        array.value.splice(selectStart + idx, 1, '_')
      }
      else if (!/\d/.test(char)) {
        array.value.splice(
          selectStart + idx, 1, array.value[selectStart + idx]
        )
      }
    });

    input.value(array.string());
    selection.state.selected = "";
  }
}