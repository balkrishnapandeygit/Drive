
const mongoose = require('mongoose');

function connectTODB() {
  mongoose.set('strictQuery', false);

  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error('❌ MONGO_URI not found in .env');
    process.exit(1);
  }

  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
      console.error('❌ DB connection error:', err.message);
      process.exit(1);
    });
}

module.exports = connectTODB;
