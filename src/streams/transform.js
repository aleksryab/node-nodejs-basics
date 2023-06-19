import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL);
    },
  });

  process.stdout.write('Write something and press Enter:\n');
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
