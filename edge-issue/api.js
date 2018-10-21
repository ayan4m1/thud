import express from 'express';
import cors from 'cors';

const app = express();
let cache = false;

app.use(cors());

app.get('/api/bust', (req, res) => {
  cache = true;
  res.status(200).end();
});

app.get('/api/reset', (req, res) => {
  cache = false;
  res.status(200).end();
});

app.get('/api/test', (req, res) => {
  if (cache) {
    res.status(204);
  } else {
    res.setHeader('Cache-Control', 'public, max-age=1200');
    res.status(200).json({ value: 'ham' });
  }
  res.end();
});

console.log('listening on 9001');
app.listen(9001);