// backend/src/controllers/upload.controller.ts
import { Request, Response } from 'express';
import { analyseCSV } from '../services/file.service';

export const uploadFile = async (req: Request, res: Response) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'Aucun fichier reçu.' });
  }

  try {
    const result = await analyseCSV(file.path);
    res.json({ message: 'Fichier analysé avec succès', data: result });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de l\'analyse', error: err });
  }
};
