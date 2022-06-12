// luigi.json 하나만 가져오기 (일부러 luigis.json으로 오타를 내어서 에러 표시 테스트)
/*
const getTodos = async () => {
  const response = await fetch('todos/luigis.json');

  if(response.status !== 200){
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  
  return data;
};

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('Promise resolved:', data))
  .catch(err => console.log('Promise rejected:', err.message));

console.log(3);
console.log(4);
*/

// luigi.json, mario.json, shaun.json 전부 가져오기
// 강의에는 위의 코드까지이나 아래는 내가 추가로 구현해 봄
const getTodos = async () => {
  const resources = [
    'todos/luigi.json',
    'todos/mario.json',
    'todos/shaun.json'
  ];

  const result = [];

  for(let i = 0; i < resources.length; i++){
    const response = await fetch(resources[i]);

    if(response.status !== 200){
      throw new Error(`cannot fetch the ${resources[i]}`);
    }

    const data = await response.json();
    result.push(data);
  }

  return result;
};

console.log(1);
console.log(2);

getTodos()
  .then(data => console.log('Promise resolved:', data))
  .catch(err => console.log('Promise rejected:', err.message));

console.log(3);
console.log(4);

var gangwon = {
  resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
  print: function(delay = 1000) {
    setTimeout(() => {
      console.log(this.resorts.join(","))
    }, delay);
  }
}

gangwon.print();