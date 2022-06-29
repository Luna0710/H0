import { RoutersConfig } from 'hzero-boot/lib/typings/IRouterConfig';

const routerConfig: RoutersConfig = [
  {
    path: '/demo1/hello',
    components: [
      {
        path: '/demo1/hello/menu',
        component: () => import('../pages/hello/menu'),
        // authorized: true,
        models: [() => import('../models/menu')],
      },
      {
        path: '/demo1/hello/MenuDetail/:tenantId',
        component: () => import('../pages/hello/MenuDetail'),
        // authorized: true,
        // title: 'MenuDetail',
        // models: [() => import('../models/menu')],
      },
    ],
  },
  {
    path: '/demo1/demo-page',
    component: () => import('../pages/hello/DemoPage'),
    authorized: true,
    title: 'Sample Demo1',
  },
];

export default routerConfig;
