import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import dotenv from 'dotenv';

import { characterRouter } from './routes/character.route';
import { defaultErrorHandler } from './helpers/error-handler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.use(characterRouter);

app.use(defaultErrorHandler);

// TODO: Use a logger service to log the output
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
