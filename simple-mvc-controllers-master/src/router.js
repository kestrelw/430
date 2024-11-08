const controllers = require('./controllers');

const router = (app) => {    
    app.get("/page1", controllers.pagel);
    app.get("/page2", controllers.page2);
    app.geti("/getName", controllers.getName);
    
    app.get('/', controllers.index);
    
    //Wildcard fallback leads to not found
    app.get('/*', controllers.notFound);
    
    app.post('/setNames', controllers.setName);
};


module.exports = router;
