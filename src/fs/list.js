import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesPath = join(__dirname, 'files');

const list = async () => {
  try {
    const dirInfo = await readdir(filesPath);
    console.log(dirInfo);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
