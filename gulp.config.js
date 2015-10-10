module.exports = function() {
    var config = {
        allTs: './app/**/*.ts',
        typings: './typings/**/*.d.ts',
        tsOutPath: './wwwroot/app',
        view: './wwwroot/index.html',
        css: './wwwroot/css/site.css'
    }

    return config;
}