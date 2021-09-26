import { caretPosition } from "../functions/caretPosition";

export class Input {
  element: HTMLInputElement;

  constructor() {
    this.element = document.getElementById("phoneInput") as HTMLInputElement
  }

  default (value: string) {
    this.element.defaultValue = value
  }
  value (value: string) {
    this.element.value = value
  }

  array() {
    return this.element.value.split("")
  }
  digits() {
    return this.element.value.match(/\d/g)?.toString().replace(/,/g, "");
  }

  position() {
    return caretPosition(this.element);
  }
}