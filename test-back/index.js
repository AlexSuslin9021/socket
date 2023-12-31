const express = require('express');
const app = express();
const http = require('http').Server(app);

const cors = require('cors')
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:5173'
    }
});
const PORT = 3009

app.get('api', (req, res) => {
    res.json({})
});

const users = []
io.on('connection', (socket) => {
    console.log(`${socket.id} user connected`);
    socket.on('message', (data) => {
        io.emit('response', data)
    })
    socket.on('newUser', (data) => {
        users.push(data)
        io.emit('responseNewUser', users)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(PORT, () => {
    console.log('listening on *:3005');
});