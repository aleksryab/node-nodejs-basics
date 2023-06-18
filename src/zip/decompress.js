import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const archivePath = join(__dirname, 'files', 'archive.gz');
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');

  const stream = createReadStream(archivePath);
  stream
    .pipe(createUnzip())
    .pipe(createWriteStream(filePath))
    .on('finish', () => console.log('Decompression done'));
};

await decompress();
