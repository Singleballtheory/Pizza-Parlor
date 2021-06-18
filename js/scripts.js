const pieTypes = {
  size: ["Small", "Medium", "Large"],
  topping: ["Pepperoni", "Cheese", "Canadian Bacon", "Pineapple"],
  price: 0,
}

function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.calculateSizes = function() {
  if (pieTypes.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 12;
  } else if (this.size === "Large") {
    this.price += 14;
  } 
  return Pizza
}

Pizza.prototype.calculateToppings = function() {
  for (let i = 0; i < this.topping.length; i++) {
    this.price += 2;
  }
}

function pizzaResult (pizzaSize) {
  for (let i= 0; i < pieTypes.length; i++) {
    const size = size[i].size
    if (size === pizzaSize) {
      return size[i]
    }
  }
}




function runTests () {
  console.log("When we create a small pepperoni pizza, we get a new pizza")
  console.log(new Pizza("Small", "Pepperoni"))
  console.log("Expected:", {size: "Small", topping: "Pepperoni"})
}

function runTests () {
  console.log("When we create a Large pepperoni pizza, we get a new pizza")
  console.log(new Pizza("Large", "Pepperoni"))
  console.log("Expected:", {size: "Large", topping: "Pepperoni"})
}


runTests()