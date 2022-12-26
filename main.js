const myObject = [
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

let coinchange = myObject.map(function(input) {
    let coincost = 100
    if(input.id % 2 === 0){
        coincost += input.coin
        return {
            id: input.id,
            name: input.name,
            coin: input.coin,
            coinUse: coincost
        }
    }
    else{
        return {
            id: input.id,
            name: input.name,
            coin: input.coin,
            coinUse: 'wrong'
        }
    }
})

console.log(coinchange)