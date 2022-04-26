//-------------------------------------------------------------------------------------
// Lecture 82. Dates & Times in JavaScript
{
  console.log('Lecture 82. Dates & Times in JavaScript');

  const now = new Date();

  console.log(now);
  console.log(typeof now);
 
  console.log('getFullYear:', now.getFullYear());
  console.log('getMonth:', now.getMonth());
  console.log('getDate:', now.getDate());
  console.log('getDay:', now.getDay());
  console.log('getHours:', now.getHours());
  console.log('getMinutes:', now.getMinutes());
  console.log('getSeconds:', now.getSeconds());

  console.log('timestamp:', now.getTime());

  console.log(now.toDateString());
  console.log(now.toTimeString());
  console.log(now.toLocaleString());
}

//-------------------------------------------------------------------------------------
// Lecture 83. Timestamps & Comparisons
{
  console.log('Lecture 83. Timestamps & Comparisons');
  const before = new Date('February 1 2022 7:30:59');
  const now = new Date();

  const diff = now.getTime() - before.getTime();
  console.log(diff);

  const mins = Math.round(diff / 1000/ 60);
  const hours = Math.round(mins / 60);
  const days = Math.round(hours / 24);

  console.log(mins, hours, days);
  console.log(`the blog was written ${days} ago`);

  // converting timestamps into date objects
  const timestamp = 1675938474990;
  console.log(new Date(timestamp));  
}

//-------------------------------------------------------------------------------------
// Lecture 85. Date-fns Library
{
  console.log('Lecture 85. Date-fns Library');

  const now = new Date();

  console.log(dateFns.isToday(now));

  // formatting
  console.log(dateFns.format(now, 'YYYY'));
  console.log(dateFns.format(now, 'MMM'));
  console.log(dateFns.format(now, 'dddd'));
  console.log(dateFns.format(now, 'Do'));
  console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

  // comparing dates
  const before = new Date('Februrary 1 2022 12:00:00');
  console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));  
}