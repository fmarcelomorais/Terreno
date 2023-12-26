const path = require('path')
const PARTIALS_DIR = path.resolve(__dirname, 'src/views/partials/');
const LAYOUTS_DIR = path.resolve(__dirname, 'src/views/layouts/');
const VIEWS_DIR = path.resolve(__dirname, 'src/views/');
const MAIN_DIR = 'main.hbs';

module.exports = {
    PARTIALS_DIR,
    LAYOUTS_DIR,
    VIEWS_DIR,
    MAIN_DIR
}
