const parseArgs = () => {
  const argPrefix = /^--/;
  const args = process.argv.slice(2);

  while (args.length) {
    const currentArg = args.shift();
    let currentValue;

    if (argPrefix.test(currentArg)) {
      if (!argPrefix.test(args[0])) {
        currentValue = args.shift();
      }
      console.log(`${currentArg.replace(argPrefix, '')} is ${currentValue};`);
    }
  }
};

parseArgs();
