import mongoose from 'mongoose';

module.exports = () => {
  function connect() {
    mongoose.connect('mongodb://localhost/sexychat', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
  require('./model/list');
};
