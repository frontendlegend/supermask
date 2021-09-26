import { Input } from "../input/classes/input"

export const moveForward = (
  arr: string[],
  curPos: number,
  input: Input
) => {
  if (!/_/.test(arr[curPos])) {
    input
      .element  
      .setSelectionRange(arr.indexOf("_"), arr.indexOf("_"))
  }
}