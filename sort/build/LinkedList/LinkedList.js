"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const NodeLinkedList_1 = require("./NodeLinkedList");
const Sorter_1 = require("../Sorter");
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new NodeLinkedList_1.NodeLinkedList(data);
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
    at(position) {
        if (!this.head) {
            throw new Error("index out of bounds");
        }
        let iterator = 0;
        let node = this.head;
        while (node) {
            if (iterator === position) {
                return node;
            }
            node = node.next;
            iterator++;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(leftIndex).value > this.at(rightIndex).value;
    }
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.value;
        leftNode.value = rightNode.value;
        rightNode.value = leftHand;
    }
    print() {
        if (!this.head) {
            throw new Error("List is empty");
        }
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
