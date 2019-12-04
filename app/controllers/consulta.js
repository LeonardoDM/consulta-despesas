module.exports.consultar = function(application, req, res){

	const connection = application.config.dbConnection;
	const DespesaDAO = new application.app.models.DespesaDAO(connection);

	DespesaDAO.consulta(function(result){
		res.render('consulta', {despesas: result});
	});
}

module.exports.filtro = function(application, req, res){

	const dadosForm = {};
	if(req.query.ano){
		dadosForm.ano = req.query.ano
	}
	if(req.query.mes){
		dadosForm.mes = req.query.mes
	}
	if(req.query.dia){
		dadosForm.dia = req.query.dia
	}
	if(req.query.tipo){
		dadosForm.tipo = req.query.tipo
	}
	if(req.query.descricao){
		dadosForm.descricao = req.query.descricao
	}
	if(req.query.valor){
		dadosForm.valor = req.query.valor
	}
	
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