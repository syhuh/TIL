const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', e => {    
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText); // JSON.parse: JSON string을 Array Object로 변경해줌
        resolve(data);      
      }
      else if(request.readyState === 4) {
        reject('could not fetch data');
      }
    });

    request.open('GET', resource);  
    request.send();

  });  
};

getTodos('todos/luigi.json').then(data => {
  console.log('promise 1 resolved:', data);
  return getTodos('todos/marios.json');
})
.then(data => {
  console.log('promise 2 resolved:', data);
  return getTodos('todos/shaun.json');
})
.then(data => {
  console.log('primise 3 resolved:', data);
})
.catch(err => {
  console.log('promise rejected:', err);
});
