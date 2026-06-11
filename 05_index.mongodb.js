use ('ecommerce')
// createIndex() - creates an index on a specified field or fields in a collection. Indexes improve the performance of query operations by allowing MongoDB to quickly locate and access the relevant documents based on the indexed field(s). The syntax for creating an index is as follows:
db.products.createIndex({ name: 1 })


// The above command creates an index on the "name" field in ascending order (1). You can also create a descending index by using -1 instead of 1. For example, to create a descending index on the "price" field, you would use:
db.products.getIndexes()

//ascending index on name field
 db.products.createIndex({ name: 1 })
  //list all indexes on products collection
db.products.getIndexes()


db.products.find({ price: { $gt: 5000 } }).explain("executionStats")
