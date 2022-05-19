import { NumbersCollection } from "./NumbersCollection";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList/LinkedList";

const numbersCollection = new NumbersCollection([-10, 3, -5, 0, 1, -20]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new StringCollection("jesusisgreat");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListTest = new LinkedList();

linkedListTest.add(-500);
linkedListTest.add(-200);
linkedListTest.add(-10000);
linkedListTest.add(1);
linkedListTest.add(20);
linkedListTest.add(-501);
linkedListTest.add(600);
linkedListTest.add(2);
linkedListTest.add(20000);
linkedListTest.add(-50);

linkedListTest.sort();
linkedListTest.print();
