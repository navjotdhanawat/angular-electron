var fs = require('fs');
var request = require("request");
var shell = require('shelljs');

module.exports = function (app) {

    app.get('/get-dependencies', function (req, res, next) {
        const path = '/root/Documents/Workspace/github/ionic2-sidemenu-tabs';

        if (fs.existsSync(`${path}/package.json`)) {
            var packages = fs.readFileSync(`${path}/package.json`, 'utf8');
            var devDependencies = JSON.parse(packages).devDependencies;
            var dependencies = JSON.parse(packages).dependencies;
            var devDependenciesKey = Object.keys(JSON.parse(packages).devDependencies);
            var dependenciesKey = Object.keys(JSON.parse(packages).dependencies);

            var options = {
                method: 'POST',
                url: 'https://api.npms.io/v2/package/mget',
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    accept: 'application/json'
                },
                body: [...dependenciesKey, ...devDependenciesKey],
                json: true
            };

            request(options, function (error, response, packages) {
                if (error) throw new Error(error);
                var child = shell.exec('npm outdated', {async:true});
                var output= '';
                child.stdout.on('data', function(stdout) {
                    output += stdout;
                    // res.json({ packages, dependencies, devDependencies,stdout  });
                });

                child.stdout.on('end', function(stdout) {
                    res.json({ packages, dependencies, devDependencies,stdout : output });
                });
                // shell.exec('npm outdated ',function(code, stdout, stderr) {
                //     console.log('Exit code:', code);
                //     console.log('Program output:', stdout);
                //     console.log('Program stderr:', stderr);
                //     res.json({ packages, dependencies, devDependencies,stdout  });
                // });
                console.log('------------------------------------------------------');

            });
        } else {
            res.json({ error: 'Package file not exist' });
        }
    });

    app.post('/update', function (req, res, next) {
        shell.exec('npm outdated ',function(code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);
        });
    });
};