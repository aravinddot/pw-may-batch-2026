

// Array Methods


// Push - adds an element to the end of the array and returns the new length of the array

// modifies the original array


// const automationTools = ['selenium', 'cypress', 'playwright', 'puppeteer', 'testcafe', 'webdriverio', 'QTP'];

// // automationTools.push('night watch')

// //automationTools.pop() // removes the last element from the array and returns that element


// //automationTools.unshift('night watch') // adds an element to the beginning of the array and returns the new length of the array

// //automationTools.shift() // removes the first element from the array and returns that element


// //const value = automationTools.includes('Playwright') // returns true if the array contains the specified element, otherwise false // case sensitive


// const valueTwo = automationTools.indexOf('playwright') // returns the index of the first occurrence of the specified element in the array, or -1 if it is not found

// console.log(valueTwo);



// const automationToolOne = ['selenium', 'cypress', 'playwright']

// const automationToolTwo = ['puppeteer', 'testcafe', 'webdriverio', 'QTP']


// const result = automationToolOne.concat(automationToolTwo, 'nightwatch') // returns a new array that is the result of merging two or more arrays

// console.log(result);



// const automationTools = ['selenium', 'cypress', 'playwright', 'puppeteer', 'testcafe', 'webdriverio', 'QTP'];

// const result = automationTools.reverse() // reverses the order of the elements in the array and returns the reversed array

// console.log(result);


// const nestedArray = [1, 2,[3, 4, [5, 6, [7, 8, [9, 10]]]]]

// console.log(nestedArray.flat(Infinity)); // flattens the array up to the specified depth and returns a new array with all sub-array elements concatenated into it



// const automationTools = ['selenium', 'cypress', 'playwright', 'puppeteer', 'testcafe', 'webdriverio', 'QTP'];

//console.log(automationTools.join(', Tool: ')); // joins all elements of the array into a string and returns the string



// automationTools.forEach((value, index, array) => {
    
//     if(value === 'playwright') {
//         console.log(`playwright index is ${index}`);
        
//     }
    
// })


//const automationTools = ['selenium', 'cypress', 'playwright', 'puppeteer', 'testcafe', 'webdriverio', 'QTP'];

// slice(starting index, ending index)

// console.log(automationTools.slice(0, 3)); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.


// splice(starting Index, delete count, add values....)

// automationTools.splice(1, 3, 'nightwatch') // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.


// console.log(automationTools);



// const num = [10, 20, 30, 40, 50]

// const result = num.map(value => value * 10)

// console.log(result);

// const automationTools = ['selenium', 'cypress', 'playwright', 'puppeteer', 'testcafe', 'webdriverio', 'QTP'];


// const upperCase = automationTools.map(value => value.toUpperCase())

// console.log(upperCase);


// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const result = arr.filter(value => value > 50)

// console.log(result);


// const found = arr.find(value => value > 9)

// console.log(found);


// const everyValue = arr.every(val => val > 10)

// console.log(everyValue);


// const someValue = arr.some(val => val > 30)

// console.log(someValue);

//const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//const foundIndex = arr.findIndex(val => val > 30)

// console.log(foundIndex);

// const arrSort = [20, 3, 88, 44, 12, 99]


// console.log(arrSort.sort((a, b) => a - b));


// const automationTools = ['selenium', 'cypress', 'playwright', 'puppeteer', 'testcafe', 'webdriverio', 'QTP'];


// console.log(automationTools.at(2));


// const num = [10, 20, 30, 40, 50]

// const result = num.reduce((acc, curr)=> acc + curr, 1)

// console.log(result);
// const str = 'playwright'

// console.log(Array.isArray(str));

// if(Array.isArray(num)) {

// } else {

// }


// const arr = [10, 20, 30, 10, 50]

// console.log(arr.lastIndexOf(10));


//[0, 'playwright']

const arr = ['playwright', 'puppeteer', 'testcafe', 'webdriverio', 'QTP']

// arr.keys() // returns a new Array Iterator object that contains the keys for each index in the array

// arr.values() // returns a new Array Iterator object that contains the values for each index in the array

// arr.entries() // returns a new Array Iterator object that contains the key/value pairs for each index in the array

for(const value of arr.entries()) {
    console.log(value);
    
}












































