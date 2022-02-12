import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { characterRouter } from './routes/character.route';
import { defaultErrorHandler } from './helpers/error-handler';

const app = express();
const port = 3000; // TODO: [YD] Remove this state

app.use(cors());
app.use(json());

app.use(characterRouter);

app.use(defaultErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
