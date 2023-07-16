import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import jobsRoutes from './routes/jobs.js';
import saveJobRoutes from './routes/saveJob.js';
import userRoutes from './routes/user.js';
import applyJobRoutes from './routes/applyJob.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/jobs', jobsRoutes);
app.use('/user', userRoutes);
app.use('/saveJob', saveJobRoutes);
app.use('/applyJob', applyJobRoutes);

const CONNECTION_URL = "mongodb+srv://hikingSpotAdmin:hikingSpot1307@hikingspotdb.z35ffxp.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));