Create a pizza website:
- customer chooses size and toppings (object/constructors)
- price is returned to the customer (prototype) 

What I need:
Back End
- Business logic for sizes and pricing
- Business logic fr toppings and pricing


Front End
- pizza sizes (selectors)
- pizza toppings (selectors)
- price calculation (agrigate calculating as they go or final price revealed at the end?)

Stretch goals:
- images for toppings
- image for when a pizza is ordered with a "ready for pickup" message

```
Test: When we create a small pepperoni pizza, we get a new pizza
Code: new Pizza("Small", "Pepperoni")
Expected result: Pizza {size: "Small", topping: "Pepperoni"}
```

```
Test: When we create a Large pepperoni pizza, we get a new pizza
Code: new Pizza("Large", "Pepperoni")
Expected result: Pizza {size: "Large", topping: "Pepperoni"}
```