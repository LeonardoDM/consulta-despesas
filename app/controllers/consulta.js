module.exports.consultar = function(application, req, res){

	const connection = application.config.dbConnection;
	const DespesaDAO = new application.app.models.DespesaDAO(connection);

	DespesaDAO.consulta(function(result){
		res.render('consulta', {despesas: result});
	});
}

module.exports.filtro = function(application, req, res){

	const dadosForm = req.query;
	
	const connection = application.config.dbConnection;
	const DespesaDAO = new application.app.models.DespesaDAO(connection);

	DespesaDAO.consulta_filtro(dadosForm, function(result){
		res.render('consulta', {despesas: result});
	});
}

module.exports.deletar = function(application, req, res){
	const _id = req.params.id;

	const connection = application.config.dbConnection;

	const DespesaDAO = new application.app.models.DespesaDAO(connection);

	DespesaDAO.excluir(_id, function(result){
		res.redirect('/consulta');
	})
}