import express from 'express';

import { createUser, authUser } from '../controllers/user.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', authUser);

export default router;