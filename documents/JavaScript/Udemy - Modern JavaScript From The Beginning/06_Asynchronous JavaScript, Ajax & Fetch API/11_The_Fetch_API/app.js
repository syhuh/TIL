document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
// function getText() {
//   fetch('test.txt')
//     .then(function(res) {
//       return res.text();
//     })
//     .then(function(data) {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Using Arrow Functions
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
}

// Get local json file data
// function getJson() {
//   fetch('posts.json')
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);

//       let out = '';
//       data.forEach(function(post) {
//         out += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = out;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Using Arrow Functions
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let out = '';
      data.forEach(function (post) {
        out += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = out;
    })
    .catch(err => console.log(err));
}

// Get from external API
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);

//       let out = '';
//       data.forEach(function(user) {
//         out += `<li>${user.login}</li>`;
//       });
//       document.getElementById('output').innerHTML = out;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Using Arrow Functions
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {    
      let out = '';
      data.forEach(function (user) {
        out += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = out;
    })
    .catch(err => console.log(err));
}