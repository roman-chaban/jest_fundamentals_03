class Cat {}

function getCat(fn) {
  return fn(new Cat());
}

function randomCalls(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}

module.exports = { Cat, getCat, randomCalls };
