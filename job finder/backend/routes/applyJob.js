import express from "express";

import { applyJobs } from '../controllers/applyJob.js';

const router = express.Router();

router.post('/', applyJobs);

export default router;