const {validationResult} = require('express-validator');

module.exports.home = function(application, req, res){
	res.render('index', {validacao: {}, dadosForm: {}, alert: false});
}

module.exports.cadastro = function(application, req, res){
	const dadosForm = req.body;

	const errors = validationResult(req);

	if(!errors.isEmpty()){
		res.render('index', {validacao: errors.array(), dadosForm: dadosForm, alert: false});
		console.log('error', errors)
		return;
	}

	const connection = application.config.dbConnection;

	const DespesaDAO = new application.app.models.DespesaDAO(connection);

	DespesaDAO.abrir(dadosForm, function(){
		res.render('index', {validacao: {}, dadosForm:{}, alert: true})
	});
}