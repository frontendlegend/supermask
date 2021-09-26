import { repeatString } from "./repeatString";

export const formatPhone = (phone = 7 + repeatString("_", 10)) => {
  const arr = phone.split("");

  const countryCode = `+${arr[0] || "_"}`;
  const areaCode = `(${arr[1] || "_"}${arr[2] || "_"}${arr[3] || "_"})`;
  const telPrefix = `${arr[4] || "_"}${arr[5] || "_"}${arr[6] || "_"}`;
  const lineNumber = `${arr[7] || "_"}${arr[8] || "_"}-${arr[9] || "_"}${arr[10] || "_"}`;
  
  return `${countryCode} ${areaCode} ${telPrefix}-${lineNumber}`;
}