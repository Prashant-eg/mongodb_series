use ('ecommerce')
// updateOne() - updates a single document that matches the specified filter criteria. If multiple documents match, only the first one will be updated. If no documents match, no update will occur.
 db.products.updateOne(     
 { name: "Wireless Mouse" },
 { $set: { price: 899 } }
 )



// updateMany() - updates multiple documents that match the specified filter criteria. All documents that match the filter will be updated. If no documents match, no update will occur.

 db.products.updateMany(
 { category: "Electronics" ,
     category: "Computers"
  },
{ $inc: { stock: 10 } }
 )


// $set operator - sets the value of a field in a document. If the field does not exist, it will be created. If the field already exists, its value will be updated to the specified value.
db.products.updateOne(
{ name: "Wireless Mouse" },
{ $push: { tags: "new" } }

)
