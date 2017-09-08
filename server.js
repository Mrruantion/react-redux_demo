var webapck = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.dev')

var proxy = [{
    path: '/*/*',
    target: 'http://cangdu.org',
    host: 'cangdu.org',
    secure: false
}];

var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    progress: true,
    stats: {
        colors: true,
    },
    proxy
});
console.log(webpack(config),'dddfdfd')
server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

server.listen(8088, function () {
    // console.log(1)
    console.log('正常打开8088端口')
})