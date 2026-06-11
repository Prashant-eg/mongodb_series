use("ecommerce")

// db.products.find({"name": "Wireless Mouse"})
// db.products.find({ category: "Electronics" })
// db.products.find({price: NumberInt('2499')}).pretty()

// db.products.find({ price: { $gt: 1000 } }) //greater than 1000
// db.products.find({price:{ $gte: 1000, $lte: 5000 }}) //greater than or equal to 1000 and less than or equal to 5000
// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] }) //products that are either in the Electronics category or have stock less than 50

// db.products.find({}, { name: 1, price: 1, _id: 0 }) //find all products but only show name and price, exclude _id

db.products.find().sort({ price: -1 }).skip(1).limit(2) //find all products, sort by price in descending order, and limit the result to 2 documents
