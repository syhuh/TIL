const correctAnswers =['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });

  // show result on page  
  //window.scrollTo(0, 0);
  scrollTo(0, 0);

  //document.querySelector('body > div.result.py-4.bg-light.text-center > div > p > span').textContent = score+'%'; // My Code
  //result.querySelector('span').textContent = `${score}%`; // Shaun's Code

  result.classList.remove('d-none');  
  
  // amimate the score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    }
    else {
      output++;
    }
  }, 10);
});

// window object (global object)

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//   alert('hello, ninjas');
// }, 3000);
// window.setTimeout(() => {
//   alert('hello, ninjas');
// }, 3000);