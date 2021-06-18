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

```
Test: We will get an array of toppings when call on the pieTypes.topping index
Code: pieTypes.topping
Expected result: (4) ["Pepperoni", "Cheese", "Canadian Bacon", "Pinneapple"]
```

```
Test: Return a pizza based upon size

```
Test: We get price results when we enter a pizza size
