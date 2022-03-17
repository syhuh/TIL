//-------------------------------------------------------------------------------------
// Lecture 71. Filter Method
{
  console.log('Lecture 71. Filter Method');

  const scores = [10, 30, 15, 25, 50, 40, 5];

  const filteredScores = scores.filter(score => score > 20);
  console.log(filteredScores);

  const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];

  const premiumUsers = users.filter(user => user.premium);
  console.log(premiumUsers);
}

//-------------------------------------------------------------------------------------
// Lecture 72. Map Method
{
  console.log('Lecture 72. Map Method');

  const prices = [20, 10, 30, 25, 15, 40, 80, 5];
  
  const salePrices =prices.map(price => price / 2);
  console.log(prices, salePrices);

  const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

  const saleProducts = products.map(product => {
    if(product.price > 30){
      // Don't do that!!! Original object will be changed too.
      //product.price = product.price / 2;
      //return product;

      return {name: product.name, price: product.price / 2};      
    }
    else {
      return product;
    }
  });
  console.log(products, saleProducts);
}

//-------------------------------------------------------------------------------------
// Lecture 73. Reduce Method
{
  console.log('Lecture 73. Reduce Method');

  const scores = [10, 20, 60, 40, 70, 90, 30];

  const result = scores.reduce((acc, curr) => {
    if(curr > 50){
      acc++;
    }
    return acc;
  }, 0); // 0 means initial value of acc is 0
  console.log(result);

  const players = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 90},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 30},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 80},
    {player: 'crystal', score: 60}
  ];

  const totalScoreOfMario = players.reduce((acc, curr) => {
    if(curr.player === 'mario'){
      acc += curr.score;
    }
    return acc;
  }, 0); // 0 means initial value of acc is 0
  console.log(totalScoreOfMario);

}

//-------------------------------------------------------------------------------------
// Lecture 74. Find Method
{
  console.log('Lecture 74. Find Method');

  const scores = [10, 5, 0, 40, 60, 10, 20, 70];

  const firstHighScore = scores.find(score => score > 50);
  console.log(firstHighScore);
}

//-------------------------------------------------------------------------------------
// Lecture 75. Sort Method
{
  console.log('Lecture 75. Sort Method');

  // example 1 - sorting strings
  const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
  names.sort();
  names.reverse();
    console.log(names);

  // example 2 - sorting numbers
  const scores = [10, 50, 20, 5, 35, 70, 45];
  //scores.sort();
  //scores.reverse();
  scores.sort((a, b) => a - b);
  console.log(scores);

  // example 3 - sorting objects
  const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
  ];
  players.sort((a, b) => b.score - a.score);
  console.log(players);
}

//-------------------------------------------------------------------------------------
// Lecture 76. Chaining Array Methods
{
  console.log('Lecture 76. Chaining Array Methods');

  const products = [
    {name: 'gold star', price: 30},
    {name: 'green shells', price: 10},
    {name: 'red shells', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];

  // const filtered = products.filter(product => product.price > 20);
  // const promos = filtered.map(product => {
  //   return `the ${product.name} is ${product.price / 2} pounds`;
  // });

  const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

  console.log(promos);
}