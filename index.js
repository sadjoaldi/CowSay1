const userCont = require("./information");
const cowsay = require("cowsay");
const message = `Hi I'm ${userCont.namee} and i'm learning web development at ${userCont.campus} `;
console.log(
  cowsay.say({
    text: message,
  })
);
