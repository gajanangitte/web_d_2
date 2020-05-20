const cookBeanSouffle = require('./library.js');

// Write your code below:
async function hostDinnerParty() {
  try {
      console.log(`${await cookBeanSouffle()} is served!`);
  } catch(error)  {
      console.log(error);
      console.log('Ordering a pizza!');
  }
}

hostDinnerParty();





