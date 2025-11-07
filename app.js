require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const userRoutes = require('./routes/user.routes');
const indexRoutes = require('./routes/index.routes');
const uploadRoutes = require('./routes/upload.routes');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/upload', uploadRoutes);


app.get('/', (req, res) => {
  res.render('index');
});


app.use((req, res) => {
  res.status(404).render('index', { message: 'Page not found' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
