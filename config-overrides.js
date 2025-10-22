module.exports = {
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          'react-dom/client': require.resolve('react-dom/client'),
          'react/jsx-runtime': require.resolve('react/jsx-runtime')
        }
      };
      return config;
    }
  };