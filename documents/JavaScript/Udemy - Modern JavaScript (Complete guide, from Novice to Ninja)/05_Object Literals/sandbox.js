//-------------------------------------------------------------------------------------
// Lecture 38. Creating an Object Literal
{
  console.log('Lecture 38. Creating an Object Literal');

  let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berin',
    blogs: ['why mac & cheese rules', '10 thinks to make marmite']
  };
  
  console.log(user);
  console.log(user.name);
  
  user.age = 35;
  console.log(user.age);
  
  console.log(user['name']);
  user['name'] = 'chun-li';
  console.log(user['name']);
  
  const key = 'location';
  console.log(user[key]);
  
  console.log(typeof user);
  
}

//-------------------------------------------------------------------------------------
// Lecture 39. Adding Methods
{
  console.log('Lecture 39. Adding Methods');

  let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berin',
    blogs: ['why mac & cheese rules', '10 thinks to make marmite'],
    login: function() {
      console.log('the user logged in');
    },
    logout: function() {
      console.log('the user logged out');
    }
  };

  user.login();
  user.logout();
}

//-------------------------------------------------------------------------------------
// Lecture 40. ‘this’ Keyword
{
  console.log('Lecture 40. ‘this’ Keyword');

  let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berin',
    blogs: ['why mac & cheese rules', '10 thinks to make marmite'],
    login: function() {
      console.log('the user logged in');
    },
    logout: function() {
      console.log('the user logged out');
    },
    logBlogs() { // ---> 쌤은 앞으로 이 표현을 사용할 것임.
      console.log('this user has written following blogs:');
      this.blogs.forEach(blog => {
        console.log(blog);
      });
    },
    testRegularFn: function() {
      console.log(this);
    },
    testArrowFn: () => { // ---> Arrow Fn 시 this의 동작 유의!
      console.log(this);
    }
  };

  console.log(this);
  user.logBlogs();
  user.testRegularFn();
  user.testArrowFn();
  
}

//-------------------------------------------------------------------------------------
// Lecture 41. Objects in Arrays
{
  console.log('Lecture 41. Objects in Arrays');

  let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berin',
    blogs: [
      {
        title: 'why mac & cheese rules', 
        likes: 30
      },
      {
        title: '10 thinks to make marmite',
        likes: 50
      }
    ],

    login: function() {
      console.log('the user logged in');
    },
    logout: function() {
      console.log('the user logged out');
    },
    logBlogs() {
      console.log('this user has written following blogs:');
      this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
      });
    }
  };

  user.logBlogs();
}

//-------------------------------------------------------------------------------------
// Lecture 42. Math Object
{
  console.log('Lecture 42. Math Object');

  console.log(Math);
  console.log(Math.PI);
  console.log(Math.E);

  const area = 7.7;

  console.log(Math.round(area));
  console.log(Math.floor(area));
  console.log(Math.ceil(area));
  console.log(Math.trunc(area));

  const random = Math.random();
  console.log(random);
  console.log(Math.round(random*100));
}

//-------------------------------------------------------------------------------------
// Lecture 43. Primitive vs Reference Types
{
  console.log('Lecture 43. Primitive vs Reference Types');

  let aNumber = 4.2;
  let aString = 'Hi';  
  let aBoolean = true;
  let aNull = null;
  let aUndefined;
  let aSymbol = Symbol('foo');

  console.log(typeof aNumber);
  console.log(typeof aString);
  console.log(typeof aBoolean);
  console.log(typeof aNull);
  console.log(typeof aUndefined);
  console.log(typeof aSymbol);

  let scoreOne = 50;
  let scoreTwo = scoreOne;

  console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

  scoreTwo = 100;
  console.log(`scoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

  const userOne = {
    name: 'John',
    age: 30
  }
  const userTwo = userOne;
  
  console.log(userOne, userTwo);

  userOne.age = 50;
  console.log(userOne, userTwo);
}