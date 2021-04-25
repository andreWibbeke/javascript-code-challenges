# Develop inventory application for a bookstore

Create a **Book class** that creates book objects having the following properties:

1. a title
2. an author
3. an ISBN
4. numCopies

Book class methods:

1. getAvailability() "out of stock" if 0 available copies,
   "low stock" if < 10 copies and "in stock" otherwise
2. Function for selling books: sell(numSold) --> subtracts numSold from numCopies
   (defaults to one)
3. Restock function: restock (numCopies) --> adds argument to numCopies (defaults to five)

Technology:

- Use both JS classes and constructor functions
- getter method
