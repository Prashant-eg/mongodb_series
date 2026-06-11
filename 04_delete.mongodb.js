use ('ecommerce')
 // deleteOne() - deletes a single document that matches the specified filter criteria. If multiple documents match, only the first one will be deleted. If no documents match, no deletion will occur.
db.contacts.deleteOne({ name: "Alice" })

// deleteMany() - deletes multiple documents that match the specified filter criteria. All documents that match the filter will be deleted. If no documents match, no deletion will occur.
db.orders.deleteMany({ status: "Delivered" })
