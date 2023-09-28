const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();
const server = require('http').Server(app);
const peerServer = ExpressPeerServer(server, {
    debug: true,
});

app.use('/peerjs', peerServer);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
