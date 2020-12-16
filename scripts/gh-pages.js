var ghpages = require('gh-pages');

ghpages.publish('__sapper__/export/service-tool-prototype',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/igd-tom/service-tool-prototype.git',
        user: {
            name: 'Tom',
            email: 'thomas.finch@internationalgasdetectors.com'
        }
    }, function (err) { console.log(err) });