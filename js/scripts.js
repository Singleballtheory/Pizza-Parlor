function Pizza (size, topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

Pizza.prototype.calculateSizes = function() {
  if (this.size === "Small") {
    this.price += 10;
  } else if (this.size === "Medium") {
    this.price += 12;
  } else if (this.size === "Large") {
    this.price += 14;
  } 
}

Pizza.prototype.calculateToppings = function() {
  for (let i = 0; i < this.topping.length; i++) {
    this.price += 2;
  }
}



// UI Logic

$(document).ready(function() {
  $("form#pizza-form").submit(function(event) {
    event.preventDefault();

    let sizeSelected = $("input:radio[name=size]:checked").val();
    let toppingsSelected = $("input:checkbox[name=toppings]:checked");
    let pizzaPie = [];
    toppingsSelected.each(function() {
      pizzaPie.push($(this).val());
    })

    let yourPizza = new Pizza(sizeSelected, pizzaPie);
    yourPizza.calculateSizes();
    yourPizza.calculateToppings();

    $("#orderPlaced").show();
    $("#sizeSelected").text(yourPizza.size);

    let yourToppings = (yourPizza.topping).join(", ");
    $("#toppingsSelected").text(yourToppings);
    $("#pizzaTotal").text("$" + yourPizza.price);
  })
});



