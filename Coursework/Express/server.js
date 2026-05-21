import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');

app.get('/ejs', (req, res) => {
    res.render('index', {
        title: 'Hello from EJS',
        people: ['John', 'Jane', 'Joe']
    });
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

import postsRouter from './routes/posts.js';
app.use('/api/posts', postsRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
