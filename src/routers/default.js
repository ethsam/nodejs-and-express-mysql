//src/routers/default.js
var controller = require('./../controllers/default'); 
// On injecte le router d'express, nous en avons besoin pour définir les routes 
module.exports = function(router) { 
    // On crée une route sur l'url "/",
    // cette route va appeler la méthode index() du contrôleur     
    router.get('/', controller.index); 
};