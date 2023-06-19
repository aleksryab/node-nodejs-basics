const parseEnv = () => {
  const prefix = 'RSS_';
  const vars = [];

  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith(prefix)) {
      vars.push(`${key}=${value}`);
    }
  });

  console.log(vars.join('; '));
};

parseEnv();
