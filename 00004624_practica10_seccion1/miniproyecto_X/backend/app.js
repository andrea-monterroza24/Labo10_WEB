import express from 'express';
import cors from 'cors';
import userRoutes from './router/router.js';
import { PORT } from "./keys/keys.js"; 

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Puerto de React
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', userRoutes);
      

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});