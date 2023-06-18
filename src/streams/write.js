import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createWriteStream } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const filePath = join(__dirname, 'files', 'fileToWrite.txt');
  const outputStream = createWriteStream(filePath, { encoding: 'utf-8' });

  process.stdout.write('Hi! Write your message:\n');
  process.stdin.on('data', (data) => {
    outputStream.write(data.toString());
  });

  outputStream.on('error', (error) => console.error(error.message));
};

await write();
