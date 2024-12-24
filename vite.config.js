import path from 'node:path';

const __dirname = import.meta.dirname;

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@styles': path.resolve(__dirname, './src/stylesheets/main.scss'),
    },
  },
};
