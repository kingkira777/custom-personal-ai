import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';

import chat from './chat';


const router = express.Router();
router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Personal AI - 👋🌎🌍🌏',
  });
});
router.use('/personal-ai', chat);

export default router;
