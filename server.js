const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/www`));
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/www/index.html`));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, _ => console.log(`Server listening at ${PORT}`));
