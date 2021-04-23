//CHALLENGE ONE 

// const addTwo = (num) => {  
//    let newNum = num + 2;
//     console.log(newNum);
// }

// addTwo(15);



//CHALLENGE TWO



// const addS = (word) => {
//     let newWord = word + 's'
//     console.log(newWord) 
// }

// addS('Mine');


//CHALLENGE THREE




// let myArray = [2, 6, 5, 10, 9];

// const multiplyByTwo = (num) => {
//     return num * 2;
// }

// console.log(myArray.map(multiplyByTwo));

// console.log(multiplyByTwo(4));

/////////////////////////////////

// const multiplyByTwo = (num) => {
//     return num * 2
// }

// const map = (arr, multiplyByTwo) => {
//     let newArray = [];
  
//     for (let i =0; i < arr.length; i++) {
//         const multiply = multiplyByTwo(arr[i], i, arr);
//         newArray.push(multiply);
//     }

//     return newArray;
// }

// console.log(map([1, 2, 3, 4, 5], multiplyByTwo));



//CHALLENGE FOUR

const forEach = (array, callbackFunction) => {
    for (let i = 0; i < array.length; i++) {
      callbackFunction(array[i]);
    }
  }

let alphabet = '';
const letters = ['a', 'b', 'c', 'd', 'e'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);


