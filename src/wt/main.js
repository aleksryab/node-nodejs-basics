import { Worker } from 'node:worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { cpus } from 'os';

const START_NUM = 10;
const __dirname = dirname(fileURLToPath(import.meta.url));
const workerPath = join(__dirname, './worker.js');

const createWorker = (data) => {
  return new Promise((resolve) => {
    const worker = new Worker(workerPath, { workerData: data });

    worker.on('message', (result) => {
      resolve({ status: 'resolved', data: result });
    });

    worker.on('error', () => {
      resolve({ status: 'error', data: null });
    });

    worker.on('exit', (code) => {
      if (code !== 0) resolve({ status: 'error', data: null });
    });
  });
};

const performCalculations = async () => {
  const workerPromises = [];
  const cores = cpus().length;
  let nthFib = START_NUM;

  for (let i = 0; i < cores; i++) {
    workerPromises.push(createWorker(nthFib));
    nthFib += 1;
  }

  const resultArr = await Promise.all(workerPromises);
  console.log(resultArr);
};

await performCalculations();
