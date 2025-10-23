import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Colin Wu - Blog',
  icon: '/favicon.png',
  logo: {
    light: '/logo-light.png',
    dark: '/logo-dark.png',
  },
  globalStyles: path.join(__dirname, 'styles/index.css'),
  themeConfig: {

    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/wrq1663',
      },
    ],
  },
});
