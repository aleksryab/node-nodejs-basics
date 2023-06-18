import { Transform } from 'stream';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n');
    },
  });

  process.stdout.write('Write something and press Enter:\n');
  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
