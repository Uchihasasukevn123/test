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

var coincost = 100

const dung = function() {
    for(var i = 0; i < myObject.length; i++){
        if(myObject[i].id % 2 === 0){
            coincost += myObject[i].coin
            return coincost
        }
        else{
            return 'wrong'
        }
    }
}

console.log(dung())
