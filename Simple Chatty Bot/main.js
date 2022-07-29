const input = require('sync-input');


function greet(bot_name, birth_year) {
  console.log("Hello! My name is " + bot_name + ".");
  console.log("I was created in " + birth_year + ".");
}

function remind_name() {
  console.log("Please, remind me your name.");
  let name = input();
  console.log("What a great name you have, " + name + "!");
}

function guess_age() {
  console.log("Let me guess your age.");
  console.log("Enter remainders of dividing your age by 3, 5 and 7.");

  let age = calculateAge(
    Number(input()),
    Number(input()),
    Number(input())
  )

  console.log("Your age is " + age + "; that's a good time to start programming!");

  function calculateAge(rem3, rem5, rem7) {
    return (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;
  }
}

function count() {
  console.log("Now I will prove to you that I can count to any number you want.");

  let number = Number(input());

  for (let i = 0; i <= number; i++) {
    console.log(i + '!');
  }
}

function test() {
  console.log("Let's test your programming knowledge.");

  let question = "Why do we use methods?"
  let options = [
    "To repeat a statement multiple times.",
    "To decompose a program into several small subroutines.",
    "To determine the execution time of a program.",
    "To interrupt the execution of a program."
  ]
  let answerId = 2;

  console.log(question);

  for (let i = 0; i < options.length; i++) {
    console.log(i + ". " + options[i]);
  }

  while (input() != answerId) {
    console.log("Please, try again.");
  }
}

function end() {
  console.log("Congratulations, have a nice day!");
}

greet('Aid', '2020')  // change it as you need
remind_name();
guess_age();
count();
test();
end();
