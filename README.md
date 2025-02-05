# Add To Cart using context API


## Existing Product Handling: 
If a user adds the same product again, it updates the quantity instead of adding a duplicate entry.

## New Product Handling: 
If the product is not already in the cart, it gets added as a new entry.

## Efficient Quantity Update: 
The quantity is stored and updated properly in the state.

## Bug Fix: 
Previously, the entire users array was being used incorrectly in addToCart. Now, only the selected user is passed.