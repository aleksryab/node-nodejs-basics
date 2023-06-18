import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const filePath = join(__dirname, 'files', 'fileToCompress.txt');
  const archivePath = join(__dirname, 'files', 'archive.gz');

  const stream = createReadStream(filePath);
  stream
    .pipe(createGzip())
    .pipe(createWriteStream(archivePath))
    .on('finish', () => {
      console.log('Compression done');
    });
};

await compress();
