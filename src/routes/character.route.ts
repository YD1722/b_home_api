import express, { Request, Response } from 'express';
import axios from 'axios';
import { authorizeUser } from '../helpers/authorization-helper';

const router = express.Router();
const API_URL = 'https://the-one-api.dev/v2/character';

router.get('/', authorizeUser, async (req: Request, res: Response) => {
  let params = req.query; // TODD: [YD] Use partials

  let result = await axios.get(API_URL, {
    headers: {
      Authorization: 'Bearer waBe9cxZ4eEQNUYaOruI',
    },
  });

  return res.status(200).send(result.data);
});

router.get('/character', (req: Request, res: Response) => {
  return res.send('yo bro');
});

export { router as characterRouter };
