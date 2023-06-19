const parseArgs = () => {
  const argPrefix = '--';
  const args = process.argv.slice(2);
  const parsedArgs = [];

  args.forEach((currentArg, idx) => {
    let currentValue;
    if (currentArg.startsWith(argPrefix)) {
      if (!args[idx + 1].startsWith(argPrefix)) currentValue = args[idx + 1];
      parsedArgs.push(`${currentArg.slice(2)} is ${currentValue}`);
    }
  });

  console.log(parsedArgs.join(', '));
};

parseArgs();
