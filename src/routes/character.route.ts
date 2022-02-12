import express, { Request, Response } from 'express';
import axios from 'axios';
import { authorizeUser } from '../helpers/authorization-helper';

const router = express.Router();
const API_URL = 'https://the-one-api.dev/v2/character';

router.get('/character', authorizeUser, async (req: Request, res: Response) => {
  let result = { data: [] };

  try {
    result = await axios.get(API_URL, {
      headers: {
        Authorization: process.env.BEARER_TOKEN as string,
      },
    });
  } catch (e) {
    return res.status(500).send('Internal server error');
  }

  return res.status(200).send(result.data);
});

router.get('/', (req: Request, res: Response) => {
  return res.send('Health check passed');
});

export { router as characterRouter };
