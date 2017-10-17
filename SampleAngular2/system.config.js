(function (global) {
    var map = {
        'app': '/app',
        '@angular': '/node_modules/@angular',
        '@angular/animations': 'node_modules/@angular/animations/bundles/animations.umd.js',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': '/node_modules/rxjs',
        'primeng': '/node_modules/primeng'
    },
        packages = {
            'app': { main: './main.js', defaultExtension: 'js' },
            'angular2-in-memory-web-api': { main: './index.js', defaultExtension: 'js' },
            'rxjs': { defaultExtension: 'js' },
            primeng: {
                defaultExtension: 'js'
            }
        },
        ngPackageNames = [
            'common',
            'compiler',
            'core',
            'http',
            'platform-browser',
            'platform-browser-dynamic',
            'router',
            'forms'
        ];

    function packUmd(pkgName) { packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.min.js', defaultExtension: 'js' } }

    ngPackageNames.forEach(packUmd);


    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);
