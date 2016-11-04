var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/new').post(api.adiciona);
    app.route('/updateId/:Id').put(api.atualizaFramework);
    app.route('/findOne/:Id').get(api.buscaFramework);
    app.route('/find').get(api.listaFramework);
    app.route('/remove/:Id').delete(api.removeFramework);

    
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};