const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:5120/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

module.exports = mongoose.connection;

module.exports = {
  url:"mongodb+srv://Rushabhpatel:@Rushabh@05.csowkf6.mongodb.net/?retryWrites=true&w=majority"
}