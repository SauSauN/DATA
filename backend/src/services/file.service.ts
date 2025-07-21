// backend/src/services/file.service.ts
import fs from 'fs';
import { parse } from 'csv-parse';

export const analyseCSV = (filePath: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const records: any[] = [];

    fs.createReadStream(filePath)
      .pipe(parse({ columns: true }))
      .on('data', (data) => records.push(data))
      .on('end', () => {
        resolve({
          rowCount: records.length,
          columnNames: Object.keys(records[0]),
        });
      })
      .on('error', (err) => reject(err));
  });
};
