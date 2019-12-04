const MongoDb = require('mongodb').MongoClient
const assert = require('assert')
const url = 'mongodb://localhost:27017'
const dbName = 'consulta_despesa'

const connMongoDB = function(data){
	MongoDb.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, function(err,client){
		assert.equal(null, err);
		console.log('Connected successfully to server');
		const db = client.db(dbName);
		query(db, data);
		client.close();
	})
}

function query(db,data){
	const collection = db.collection(data.collection)
	switch(data.operation){
		case 'create':
			collection.insertOne(data.despesa, data.callback)
			break;
		case 'read':
			collection.find(data.despesa).toArray(data.callback)
			break;
		case 'read_filter':
			collection.find(data.despesa).toArray(data.callback)
			break;
		case 'delete':
			collection.deleteOne({_id: data.id}, data.callback)
			break;
		default:
			break;
	}
}

module.exports = function(){
	return connMongoDB;
};