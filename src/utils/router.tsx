import getModuleRouters from './getModuleRouters';
import { getConvertRouter } from 'hzero-boot/lib/utils/getConvertRouter';
import routers from '../config/routers';

// 在子模块的外层做一次包裹，用于进行统一的样式修改等操作
// const PageWrapperComponent: React.FC = (props) => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexFlow: 'column',
//         height: '100%',
//       }}
//       className="page-wrap-class"
//     >
//       {props.children}
//     </div>
//   );
// };


const convertRouter = (app) =>
  getConvertRouter({
    hzeroRoutes: routers,
    options: {
      app,
      // pageWrapperComponent: PageWrapperComponent,
    },
  });

export function getRouterData(app) {
  return {
    ...getModuleRouters(app),
    ...convertRouter(app)(),
  };
}
