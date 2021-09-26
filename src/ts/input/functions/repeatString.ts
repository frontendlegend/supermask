export const repeatString = (str: string, times: number) => {
  let repeated = "";

  for (let i = 0; i < times; i++) {
    repeated += str;
  }
  
  return repeated
}