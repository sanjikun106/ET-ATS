const express = require('express');
const path = require('path');
const app = express();

const PORT = 3018;

app.use(express.static(__dirname));

// Serve index.html for /chapter route (Merge portal redirect target)
app.get('/chapter', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`MathATS server running on port ${PORT}`);
});
