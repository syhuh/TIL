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

getTodos('todos/luigis.json').then(data => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});

// promise example
/*
const getSomeThing = () => {
  return new Promise((resolve, reject) => {
    // fetch somethind
    
    // if success
    //resolve('some data');

    // if fail
    reject('some error');

  });
};
*/

// Expression 1 : Messy(Bad)
/*
getSomeThing().then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});
*/

// Expression 2 : Preferred
/*
getSomeThing().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
*/