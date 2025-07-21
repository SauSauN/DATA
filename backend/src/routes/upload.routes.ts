// backend/src/routes/upload.routes.ts
import express from 'express';
import { uploadFile } from '../controllers/upload.controller';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.post('/', upload.single('file'), uploadFile);

export default router;
