export class Array {
  value: string[];

  constructor() {
    this.value = []
  }

  define(array) {
    this.value = array
  }
  string() {
    return this.value.toString().replace(/,/g, "")
  }
}