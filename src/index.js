import express from 'express';
const app = express();
const PORT = 3000;

import postRouter from './routes/posts.routes.js';

app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});