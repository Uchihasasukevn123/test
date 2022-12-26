// Make the variable clearly and meaningful.
const listCoin = [
    {
        id: 1,
        name: 'javascript',
        coin: 12,
    },

    {
        id: 2,
        name: 'html',
        coin: 65,
    },
    
    {
        id: 3,
        name: 'css',
        coin: 125,
    },

    {
        id: 4,
        name: 'python',
        coin: 54,
    },

    {
        id: 5,
        name: 'dart',
        coin: 120,
    },

    {
        id: 6,
        name: 'ruby',
        coin: 56,
    },
]

// Ignore "var", do not use it. use "const" and "let" only.
let coincost = 100;

// Use arrow function of ES6 in Javascript.
const dung = () => {
    for(let i = 0; i < listCoin.length; i++){
        if(listCoin[i].id % 2 === 0) {
            coincost += listCoin[i].coin;
        }
    }
}
// We call dung function to do some logic to coincost.
dung();
// print result.
console.log(coincost);
