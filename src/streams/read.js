import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  const stream = createReadStream(filePath, { encoding: 'utf-8' });

  stream.on('data', (chunk) => process.stdout.write(chunk));
  stream.on('error', (error) => console.error(error.message));
};

await read();
