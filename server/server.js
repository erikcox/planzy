const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const user = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', user.checkSession);

app.post('/signin', user.signIn, user.startSession);
app.post('/signup', user.signUp, user.startSession);

app.use(express.static(
  path.resolve(__dirname, '../', 'client'),
  { extensions: ['html'] },
));


app.listen(PORT, () => console.log(`listening on ${PORT}`));