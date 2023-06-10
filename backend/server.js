// IMPORTED MODULES.
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const session = require('express-session');

const config = require('./config/config.js');





// ROUTES.
const routes = require('./services/routers.js');



// .
const app = express();


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(multer().none());
app.use(morgan('tiny'));
app.use(session({
    secret: config.session.sessionKey,
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false 
}));






// .
app.use('/api/memories', routes);





app.listen(config.server.port, () => {
    console.log(`Server Started at ${config.server.port}. Click on http://${config.server.host}:${config.server.port}`)
});

