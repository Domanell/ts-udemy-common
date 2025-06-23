"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// BAD CODE
class SorterBadCode {
    // collection: number[];
    // The more types we have, the more if statements we'll have
    constructor(collection) {
        this.collection = collection;
        // this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // If collection is an array of numbers
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const left = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = left;
                    }
                }
                // If collection is a string
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('Bfatec');
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.sort();
linkedList.print();
