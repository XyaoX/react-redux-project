module.exports = function(app){
    const controller = require('../controllers/personController'),
    authController = require('../controllers/authController'),
     path = require("path");
    
    app.route('/person')
        .get(controller.list_all_person)
        .post(controller.register_user)
        .delete(controller.delete_user);

    app.route('/auth')
        .get(authController.auth_user)
        .post(authController.login_user);

}
