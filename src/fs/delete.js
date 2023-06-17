import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
