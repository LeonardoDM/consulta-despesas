const {validationResult} = require('express-validator');

module.exports.home = function(application, req, res){
	res.render('index', {validacao: {}, dadosForm: {}});
}

module.exports.cadastro = function(application, req, res){
	const dadosForm = req.body;

	const errors = validationResult(req);

	if(!errors.isEmpty()){
		res.render('index', {validacao: errors.array(), dadosForm: dadosForm});
		return;
	}

	const connection = application.config.dbConnection;

	const DespesaDAO = new application.app.models.DespesaDAO(connection);

	DespesaDAO.abrir(dadosForm, function(){
		res.render('index', {validacao: {}, dadosForm:{}})
	});
}