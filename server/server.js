const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port);
