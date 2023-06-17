import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const content = await readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
