function radixSort(collection: number[]) : number[] {
    // create a table to store the number by digit
    let table: {[key: number]: number[]} = {0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []};
    // map item - min to get the positive value this able to sort the negative value
    let min : number = Math.min(...collection);
    let result = collection.map((item) => item - min);
    
    let maxDigit: number = 0;

    // get the max digit of the number
    for (let i = 0; i < collection.length; i++) {
        let digit: number = Math.ceil(Math.log(collection[i]));
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }

    // sort the number by digit
    for (let i = 0; i < maxDigit; i++) {
        for (let j = 0; j < result.length; j++) {
            let digit: number = Math.floor((result[j] % 10 ** (i + 1)) / 10 ** i);
            
            table[digit].push(result[j]);
        }
        result = [];
        for (let j = 0; j < 10; j++) {
            if (table[j].length === 0) {
                continue;
            }
            result = [...result, ...table[j]];
            table[j] = [];
        }
    }

    // map item + min to get the original value
    result = result.map((item) => item + min);
    return result;
}

export function merge (collection_1: number[] , collection_2: number[], collection_3: number[]) : number[] {
    const mergedCollection = [...collection_1, ...collection_2, ...collection_3];
    let result = radixSort(mergedCollection);
    return result
}

const collection_1 = [-3, -1, 4, 5, 6, 7, 8, 9, 10];
const collection_2 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
const collection_3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

console.log(merge(collection_1, collection_2, collection_3));