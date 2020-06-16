const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const port = 3333;

require('./database');
const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);


app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err);
});


app.listen(port, () => {
    console.log('Servidor rodando na porta: ' + port)
})