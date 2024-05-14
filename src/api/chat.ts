import express from 'express';
import ChatAi from '../libs/personal-aiv2';

const router = express.Router();

router.post("/", async (req, res) => {
    const response = await ChatAi(req.body);
    return res.status(200).send({ response : response})
});


export default router;