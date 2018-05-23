module.exports = (app) =>{
    var mainController = require('../controllers/mainController');
    app.set('view engine', 'pug');
    app.route('/')
    .get(mainController.homePage);
    app.route('/api/getButtonStatus')
    .get(mainController.getButtonStatus);
    app.route('/api/setButtonStatus')
    .post(mainController.setButtonStatus);
}