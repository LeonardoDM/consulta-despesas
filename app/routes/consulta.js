const {check} = require('express-validator');

module.exports = function(application){
	application.get('/consulta', function(req, res){
		application.app.controllers.consulta.consultar(application, req, res);
	});

	application.get('/consulta/filtro',function(req, res){
		application.app.controllers.consulta.filtro(application, req, res);
	});

	application.get('/delete/:id', function(req, res){
		application.app.controllers.consulta.deletar(application, req, res);
	});
}