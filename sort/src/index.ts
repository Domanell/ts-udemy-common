// BAD CODE
class SorterBadCode {
    // collection: number[];

    // The more types we have, the more if statements we'll have
    constructor(public collection: number[] | string) {
        // this.collection = collection;
    }

    sort(): void {
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

import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Bfatec')
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.sort();
linkedList.print();

