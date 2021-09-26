import { Input } from "../input/classes/input";

export const moveBackwards = (
  arr: string[],
  curPos: number,
  input: Input
) => {
  if ([0, 1, 2].indexOf(curPos) !== -1) {
    input
      .element
      .setSelectionRange(arr.indexOf('_'), arr.indexOf('_'));
  }
  else if (/\d/.test(arr[curPos - 1])) {
    input
      .element
      .setSelectionRange(curPos, curPos); 
  } 
  else if (/_/.test(arr[curPos - 1])) {
    input
      .element
      .setSelectionRange(curPos, curPos); 
  } 
  else if (/-/.test(arr[curPos - 1])) {
    input
      .element
      .setSelectionRange(curPos - 1, curPos - 1); 
  } 
  else if (/ /.test(arr[curPos - 1]) && /\)/.test(arr[curPos - 2])) {
    input
      .element
      .setSelectionRange(curPos - 2, curPos - 2); 
  } 
  else if (/ /.test(arr[curPos]) && /\)/.test(arr[curPos - 1])) {
    input
      .element
      .setSelectionRange(curPos - 1, curPos - 1); 
  } 
  else if (/\(/.test(arr[curPos - 1])) {
    input
      .element
      .setSelectionRange(curPos, curPos); 
  } 
  else if (/\)/.test(arr[curPos])) {
    input
      .element
      .setSelectionRange(curPos + 1, curPos + 1); 
  } 
}