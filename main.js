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

const dung = function() {
  for(let i = 0; i < listCoin.length; i++) {
    let coincost = 100;
    if(listCoin[i].id % 2 === 0){
      coincost += listCoin[i].coin
      return coincost;
    } else{
      return 'wrong';
    }
  }
}

// Clone map.
// const newListCoin = listCoin.map((item) => {
//   let coincost = 100;
//   if (item.id % 2 === 0) {
//     return coincost += item.coin;
//   }
//   return 'wrong';
// });

const cloneMap = () => {
  let newList = [];
  for(let i = 0; i < listCoin.length; i++) {
    let coincost = 100;
    if (listCoin[i].id % 2 === 0) {
      newList.push(coincost += listCoin[i].coin);
    } else{
      newList.push('wrong');
    }
  }
  return newList;
} 

const newListCoin = cloneMap();
console.log(newListCoin);
