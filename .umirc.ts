import { defineConfig } from 'umi';
const { ModuleFederationPlugin } = require('webpack').container;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      name: '首页',
      path: '/home',
      component: '@/pages/Home',
    },
  ],
  fastRefresh: {},
  dynamicImport: {},
  qiankun: {
    slave: {},
  },
  webpack5: {},
  mfsu: false,
  chainWebpack: (config: any) => {
    config.output.publicPath('auto'); // 路径处理，保证导入项目路径正确
    config.plugin('mf').use(ModuleFederationPlugin, [
      {
        name: 'app2',
        remotes: {
          app1: 'app1@http://localhost:8000/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
        },
      },
    ]);
    return config;
  },
});
