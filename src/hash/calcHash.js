import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const data = await readFile(filePath);
  const hash = createHash('sha256').update(data).digest('hex');
  console.log(hash);
};

await calculateHash();
