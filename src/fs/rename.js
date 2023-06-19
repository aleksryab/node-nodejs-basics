import { rename as fsRename, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const isFileExists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  const filesPath = join(__dirname, 'files');
  const wrongPath = join(filesPath, 'wrongFilename.txt');
  const properPath = join(filesPath, 'properFilename.md');

  try {
    if (await isFileExists(properPath)) {
      throw new Error(`FS operation failed: file already exists ${properPath}`);
    }

    await fsRename(wrongPath, properPath);
    console.log('File renamed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`FS operation failed: no such file ${wrongPath}`);
    }
    throw err;
  }
};

await rename();
