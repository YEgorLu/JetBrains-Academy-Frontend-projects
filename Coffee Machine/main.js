const input = require('sync-input')

const drinks = {
  espresso: {
    water: 250,
    milk: 0,
    coffee: 16,
    cost: 4
  },
  latte: {
    water: 350,
    milk: 75,
    coffee: 20,
    cost: 7
  },
  cappuccino: {
    water: 200,
    milk: 100,
    coffee: 12,
    cost: 6
  },
};

const machine = {
  water: 400,
  milk: 540,
  coffee: 120,
  cups: 9,
  money: 550,
  buy: (drink, count = 1) => {
    machine.water -= drink.water * count;
    machine.milk -= drink.milk * count;
    machine.coffee -= drink.coffee * count ;
    machine.money += drink.cost * count;
    machine.cups -= count;
  },
  canBuy: (drink, count = 1) => {
    if (machine.cups < count) {
      console.log("Sorry, not enough cups!")
      console.log(`Need ${count - machine.cups} more`);
      return false;
    } else if (machine.water < drink.water * count) {
      console.log("Sorry, not enough water!");
      console.log(`Need ${drink.water * count - machine.water} more`);
      return false;
    } else if (machine.milk < drink.milk * count) {
      console.log("Sorry, not enough milk!");
      console.log(`Need ${drink.milk * count - machine.milk} more`);
      return false;
    } else if (machine.coffee < drink.coffee * count) {
      console.log("Sorry, not enough coffee!");
      console.log(`Need ${drink.coffee * count - machine.coffee} more`);
      return false;
    }
    return true;
  },
  print: () => {
    console.log("The coffee machine has:");
    console.log(`${machine.water} ml of water`);
    console.log(`${machine.milk} ml of milk`);
    console.log(`${machine.coffee} g of coffee beans`);
    console.log(`${machine.cups} disposable cups`);
    console.log(`$${machine.money} of money`);
  }
}

let needExit = false;
const actions = new Map([["buy", buy], ["fill", fill], ["take", take], ["remaining", machine.print], ["exit", () => needExit = true]]);

while (!needExit) {
  execute();
}

function fill() {
  console.log("Write how many ml of water you want to add:");
  let water = Number(input());
  while (!isCorrectNum(water)) {
    water = Number(input());
  }
  machine.water += water;

  console.log("Write how many ml of milk you want to add:");
  let milk = Number(input());
  while (!isCorrectNum(water)) {
    milk = Number(input());
  }
  machine.milk += milk;

  console.log("Write how many grams of coffee beans you want to add:");
  let coffee = Number(input());
  while (!isCorrectNum(coffee)) {
    coffee = Number(input());
  }
  machine.coffee += coffee;

  console.log("Write how many disposable coffee cups you want to add:");
  let cups = Number(input());
  while (!isCorrectNum(cups)) {
    cups = Number(input());
  }
  machine.cups += cups;
}

function buy() {
  console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
  let coffee = input();
  while (!['1', '2', '3', "back"].includes(coffee)) {
    coffee = input();
  }
  if (coffee === "back") return;
  console.log("How many cups do you want?");
  let cups = Number(input());
  while(!isCorrectNum(cups)){
    cups = Number(input());
  }
  switch (Number(coffee)) {
    case 1:
      if (machine.canBuy(drinks.espresso, cups))
        machine.buy(drinks.espresso, cups);
      break;
    case 2:
      if (machine.canBuy(drinks.latte, cups))
        machine.buy(drinks.latte, cups);
      break;
    case 3:
      if (machine.canBuy(drinks.cappuccino, cups))
        machine.buy(drinks.cappuccino, cups);
      break;
  }
  console.log("I have enough resources, making you a coffee!");
}

function take() {
  console.log(`I gave you $${machine.money}`);
  machine.money = 0;
}

function execute() {
  console.log("Write action (buy, fill, take, remaining, exit):");
  let action = input().toLowerCase();
  while (!actions.has(action)) {
    action = input().toLowerCase();
  }
  actions.get(action)();
}

function isCorrectNum(num) {
  return !Number.isNaN(num) && num >= 0;
}