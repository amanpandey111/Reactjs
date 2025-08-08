// import type { StorybookConfig } from '@storybook/react-vite';

// const config: StorybookConfig = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'], // Automatically find stories
//   addons: [
//     '@storybook/addon-essentials', // Add essential addons like actions, controls, etc.
//     '@storybook/addon-links', // Link between stories
//   ],
//   framework: '@storybook/react', // React framework
//   core: {
//     builder: '@storybook/builder-vite', // Use Vite as the builder
//   },
// };

// export default config;

// import type { StorybookConfig } from '@storybook/builder-vite';

// const config: StorybookConfig = {
//   stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'], // Automatically find stories
//   addons: [
//     '@storybook/addon-essentials', // Add essential addons like actions, controls, etc.
//     '@storybook/addon-links', // Link between stories
//   ],
//   framework: '@storybook/react', // React framework
//   core: {
//     builder: '@storybook/builder-vite', // Use Vite as the builder
//   },
// };

// export default config;


import type { StorybookConfig } from '@storybook/builder-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
};

export default config;
