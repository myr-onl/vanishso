import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      out: 'build',
      precompress: false,
    }),
  },
};

export default config;