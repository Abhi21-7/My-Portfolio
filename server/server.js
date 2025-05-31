import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import portfolioRoute from './routes/portfolioRoute.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use PORT from environment or default to 5000
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// Define allowed origins for CORS
const allowedOrigins = [
  "https://my-portfolio-five-henna-22.vercel.app",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// Parse incoming JSON requests
app.use(express.json());

// Serve static files from the 'out' directory
app.use(express.static(path.join(process.cwd(), 'out')));

// Use portfolio routes under /api/v1/portfolio
app.use('/api/v1/portfolio', portfolioRoute);

// Catch-all route to serve index.html for SPA support
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'out', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
