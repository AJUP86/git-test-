const myName = 'Alejandro';
const greet = 'Hello';
console.log(`${greet} ${myName}`);

const myArray = ['Alejandro', 'Levi', 'Mario', 'Daisy'];

const myMessage = 'is an amazing developer that should earn 100 euro per hour!';

const getFeedback = (arr, mess) => {
  arr.map((i) => {
    console.log(`${i} ${mess}`);
  });
};

getFeedback(myArray, myMessage);
