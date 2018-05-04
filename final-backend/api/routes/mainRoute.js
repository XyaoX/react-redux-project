module.exports = function(app){
    const controller = require('../controllers/personController');
    const path = require("path");
    
    app.route('/person')
        .get(controller.list_all_person)
        .post(controller.create_a_person);

}
