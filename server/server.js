import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import portfolioRoute from './routes/portfolioRoute.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://my-portfolio-five-henna-22.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

// Only API routes!
app.use('/api/v1/portfolio', portfolioRoute);

// Export for Vercel serverless
export default app;