const ObjectID = require('mongodb').ObjectId;

function DespesaDAO(connection){
	this._connection = connection;
}

DespesaDAO.prototype.abrir = function (despesa, callback){

	const data = {
		operation : 'create',
		despesa : despesa,
		collection : 'despesas',
		callback : (err,result) => {
			callback(result);
		}
	};
	this._connection(data);
}

DespesaDAO.prototype.consulta = function (callback){

	const data = {
		operation : 'read',
		despesa : {},
		collection : 'despesas',
		callback : (err,result) => {
			callback(result);
		}
	};
	this._connection(data);
}

DespesaDAO.prototype.consulta_filtro = function (args, callback){

	const data = {
		operation : 'read_filter',
		despesa : args,
		collection : 'despesas',
		callback : (err,result) => {
			callback(result);
		}
	};
	this._connection(data);
}

DespesaDAO.prototype.excluir = function (_id, callback){

	const data = {
		operation : 'delete',
		id: ObjectID(_id),
		collection : 'despesas',
		callback : (err,result) => {
			callback(result);
		}
	};
	this._connection(data);
}

module.exports = () => {
	return DespesaDAO;
}