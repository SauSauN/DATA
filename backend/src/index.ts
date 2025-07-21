import express from 'express';
import cors from 'cors';
import uploadRoutes from './routes/upload.routes';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'; 

app.use(cors());
app.use(express.json());
app.use('/api/upload', uploadRoutes);

app.listen(Number(PORT), HOST, () => {
  console.log(`🚀 Serveur lancé sur http://${HOST}:${PORT}`);
});
