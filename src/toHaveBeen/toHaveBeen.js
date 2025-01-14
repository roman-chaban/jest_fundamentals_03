const can = {
  name: "pamplemousse",
  ounces: 12,
};

function shouldReturnGreetMessage(callback, message) {
  if (message === "Hello world!") {
    return callback(message);
  }
}

function drinkEach(callback, list) {
  return callback(list);
}

function myBeverages(data) {
  return data;
}

module.exports = { can, shouldReturnGreetMessage, drinkEach, myBeverages };
