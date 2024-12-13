import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import { router as apiRouter } from './routes';
import { errorHandler } from './middleware/errorHandler';
import { apiLimiter } from './middleware/rateLimiter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDatabase();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json({ limit: '10kb' })); // Limit payload size

// Rate limiting
app.use('/api/', apiLimiter);

// Routes
app.use('/api', apiRouter);

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});