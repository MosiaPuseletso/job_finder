import express from 'express';

import { saveJob, savedJob } from '../controllers/saveJob.js';

const router = express.Router();

router.post('/', saveJob);
router.post('/getJobs', savedJob);
export default router;