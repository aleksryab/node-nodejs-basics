const parseEnv = () => {
  const prefix = /^RSS_/;

  Object.entries(process.env).forEach(([key, value]) => {
    if (prefix.test(key)) {
      console.log(`${key}=${value};`);
    }
  });
};

parseEnv();
