export class NodeLinkedList {
  public next: NodeLinkedList | null = null;
  constructor(public value: number) {
    this.value = value;
  }
}
