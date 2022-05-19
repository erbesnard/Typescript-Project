import { NodeLinkedList } from "./NodeLinkedList";
import { Sorter, Sortable } from "../Sorter";

export class LinkedList extends Sorter implements Sortable {
  head: NodeLinkedList | null = null;

  add(data: number): void {
    const node = new NodeLinkedList(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length() {
    if (!this.head) {
      return 0;
    }

    let iterator = 1;
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      iterator++;
    }

    return iterator;
  }

  at(position: number): NodeLinkedList {
    if (!this.head) {
      throw new Error("index out of bounds");
    }

    let iterator = 0;
    let node: NodeLinkedList | null = this.head;
    while (node) {
      if (iterator === position) {
        return node;
      }
      node = node.next;
      iterator++;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }

  print(): void {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let node: NodeLinkedList | null = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}
