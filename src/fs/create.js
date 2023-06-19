import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathTofFile = join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(pathTofFile, content, { flag: 'wx' });
    console.log('File created');
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed: file already exists.');
    } else {
      throw err;
    }
  }
};

await create();
