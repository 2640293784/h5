// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)
const routers = [
  {
    path: '/',
    component: _import('main/index'),
    name: 'main',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    component: _import('main/login'),
    name: 'login',
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: _import('main/register'),
    name: 'register',
    meta: {
      title: '注册'
    }
  },
  {
    path: '/password',
    component: _import('main/password'),
    name: 'password',
    meta: {
      title: '找回密码'
    }
  },
  {
    path: '/404',
    component: _import('main/404'),
    name: '404'
  }
]
export default routers