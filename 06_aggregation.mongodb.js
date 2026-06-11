use ("ecommerce")
// aggregate() - performs aggregation operations on a collection. Aggregation allows you to process and analyze data in a collection by applying various stages of operations, such as grouping, filtering, sorting, and transforming the data. The syntax for using the aggregate() method is as follows:
db.orders.aggregate([
{ $group: { _id: null, totalRevenue: { $sum: "$total" } } }
])



// In the above example, we are using the $group stage to group the documents in the "orders" collection by a null value (which means we want to group all documents together) and calculate the total revenue by summing the "total" field of each document. The result will be a single document with the total revenue for all orders.
db.orders.aggregate([
{ $group: { _id: "$status", totalOrders: { $sum: 1 } } }
])



// In this example, we are grouping the orders by their "status" field and counting the total number of orders for each status by using the $sum operator with a value of 1. The result will be a document for each unique status, along with the total number of orders for that status.
db.orders.aggregate([
{
 $lookup: {
from: "products",
 localField: "products.name",
 foreignField: "name",
as: "productDetails"
 }
 }
])
