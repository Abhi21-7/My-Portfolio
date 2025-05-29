import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import portfolioRoute from './routes/portfolioRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow only your frontend domain and localhost for dev
const allowedOrigins = [
  "https://my-portfolio-abhi21-7s-projects.vercel.app", // your deployed frontend
  "http://localhost:3000"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, '/out')));

app.use('/api/v1/portfolio', portfolioRoute);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/out/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});