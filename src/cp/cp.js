import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { fork } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const scriptPath = join(__dirname, 'files', 'script.js');
  const childProcess = fork(scriptPath, args);
  childProcess.on('exit', () => console.log('Process was closed'));
  childProcess.on('error', (err) => console.error(err.message));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['hi', 'reviewer', 'good', 'luck']);
