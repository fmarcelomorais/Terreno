const exphbs = require("express-handlebars");
const { PARTIALS_DIR, LAYOUTS_DIR, VIEWS_DIR } = require("./constants");

exports.init = function(app){
    app.engine('hbs', exphbs.engine({
        extname: 'hbs',
        partialsDir: PARTIALS_DIR,
        layoutsDir: LAYOUTS_DIR,
        helpers: function(name, options){
            if(!this._sections) this._sections = {}
            this._sections[name] = options.fn(this)
            return null;
        }
        
    }));
    app.set('view engine', 'hbs');
    app.set('views', VIEWS_DIR);
}