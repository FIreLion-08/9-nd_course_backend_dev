const express = require ('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require('cors');
const userRouter = require('./routes/users');
const loggerOne = require('./middlewares/loggerOne');
const loggerTwo = require('./middlewares/loggerTwo');

dotenv.config()

const app = express();

const {
    PORT = 3003,
    API_URL="http://127.0.0.1",
} = process.env;

const helloWorld = (request, response) => {
    response.status(200);
    response.send("Hello, World!");
};

app.use(loggerOne);
// app.use(loggerTwo);

// app.use(bodyParser.json());

app.get('/', helloWorld);

app.post('/', (request, response) => {
    response.status(200);
    response.send('Hello from POST');
});

app.use(cors);

// app.get('/users/34', (request, response) => {
//     response.status(200);
//     response.send('User with id: 34');
// })

console.log("123");
app.use(userRouter);
console.log('456');

app.listen(PORT, ()=>{
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
})
