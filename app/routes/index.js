const {check} = require('express-validator');

module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.home(application, req, res);
	})

	application.post('/cadastrar', [check('ano', 'Ano não pode ser vazio').not().isEmpty(),
		check('mes', 'Mês não pode ser vazio').not().isEmpty(),
		check('dia', 'Dia não pode ser vazio').not().isEmpty(),
		check('tipo', 'Tipo não pode ser vazio').not().isEmpty(),
		check('descricao', 'Descrição não pode ser vazio').not().isEmpty(),
		check('valor', 'Valor não pode ser vazio').not().isEmpty()],
		function(req, res){
			application.app.controllers.index.cadastro(application, req, res);
	});
}