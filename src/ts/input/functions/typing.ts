export const typing = (
  arr: string[],
  curPos: number,
  char: string
) => {
  if (/\+|\d|_/.test(arr[curPos]) && [0, 1].indexOf(curPos) === -1) {
    
    if (char) { 
      if (/\d/.test(char) && curPos === arr.indexOf("_")) { return char }
      else { return arr[curPos] }
    } 
    else { return "_" }
  } 
  else { return arr[curPos] }
}