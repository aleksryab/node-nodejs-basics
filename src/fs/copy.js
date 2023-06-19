import { mkdir, readdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const originFolderPath = join(__dirname, 'files');
const copyFolderPath = join(__dirname, 'files_copy');

const copy = async (sourceDirPath, distDirPath) => {
  try {
    const dirInfo = await readdir(sourceDirPath, { withFileTypes: true });
    await mkdir(distDirPath);

    for (const item of dirInfo) {
      const itemSourcePath = join(sourceDirPath, item.name);
      const itemDistPath = join(distDirPath, item.name);

      if (item.isDirectory()) {
        await copy(itemSourcePath, itemDistPath);
      } else {
        await copyFile(itemSourcePath, itemDistPath);
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(`FS operation failed: no files directory`);
    }

    if (err.code === 'EEXIST') {
      throw new Error(`FS operation failed: files_copy directory already exist`);
    }

    throw err;
  }
};

await copy(originFolderPath, copyFolderPath);
console.log('Files copied');
