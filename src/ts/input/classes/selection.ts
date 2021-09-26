export class Selection {
  state: {
    selectStart: number;
    selectEnd: number;
    selected: string;
  }

  constructor() {
    this.state = {
      selectStart: null,
      selectEnd: null,
      selected: ""
    }
  }
}