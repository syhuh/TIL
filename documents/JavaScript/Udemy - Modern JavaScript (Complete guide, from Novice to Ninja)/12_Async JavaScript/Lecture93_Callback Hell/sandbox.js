const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', e => {    
    if(request.readyState === 4 && request.status === 200){
      const data = JSON.parse(request.responseText); // JSON.parse: JSON string을 Array Object로 변경해줌
      callback(undefined, data);      
    }
    else if(request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });

  request.open('GET', resource);  
  request.send();
};

// Callback Hell
getTodos('todos/luigi.json', (err, data) =>{
  console.log(data);
  getTodos('todos/mario.json', (err, data) =>{
    console.log(data);
    getTodos('todos/shaun.json', (err, data) =>{
      console.log(data);
    });
  });  
});