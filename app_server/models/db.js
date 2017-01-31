var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

var dbURIlog = 'mongodb://localhost/Loc8rLog',
    logDB = mongoose.createConnection(dbURIlog);

logDB.on('connected', function() {
    console.log('Mongoose connected to ' +dbURIlog);
})

logDB.close(function() {
    console.log('Mongoose log disconnected');
});

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to '+ dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

//function to handle shutdown on events.
var gracefulShutdown = function(msg, callback) {
    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose disconnected through '+ msg);
        callback();
    });
};

//did nodemon restart?
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});
