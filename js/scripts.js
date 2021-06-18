function Pizza (size, topping) {
  this.size = size
  this.topping = topping
}

const pieTypes = {
  size: "Small",
  topping: "Pepperoni",
}

// function pizzaResult ()




function runTests () {
  console.log("When we create a small pepperoni pizza, we get a new pizza")
  console.log(new Pizza("Small", "Pepperoni"))
  console.log("Expected:", {size: "Small", topping: "Pepperoni"})
}


runTests()