
const express = require('express');
const app = express();
const stringController = require('./controllers/stringController');

app.get('/api/reverse', stringController.reverse);
app.get('/api/uppercase', stringController.uppercase);
app.get('/api/count-vowels', stringController.countVowels);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
