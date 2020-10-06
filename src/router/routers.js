// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)
const routers = [
  {
    path: '/',
    component: _import('home'),
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
    path: '/classify',
    component: _import('classify'),
    name: 'classify',
    meta: {
      title: '分类'
    }
  },
  {
    path: '/shoppingCart',
    component: _import('shoppingCart'),
    name: 'shoppingCart',
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/details/:id',
    component: _import('details'),
    name: 'details',
    meta: {
      title: '产品详情',
      show:true
    }
  },
  {
    path: '/users',
    component: _import('users'),
    name: 'users',
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/users/address',
    component: _import('users/address'),
    name: 'usersAddress',
    meta: {
      title: '收货地址',
      show:true
    }
  },
  {
    path: '/users/order',
    component: _import('users/order'),
    name: 'usersOrder',
    meta: {
      title: '我的订单',
      show:true
    }
  },
  {
    path: '/users/recharge',
    component: _import('users/recharge'),
    name: 'usersRecharge',
    meta: {
      title: '账户充值',
      show:true
    }
  },
  {
    path: '/404',
    component: _import('main/404'),
    name: '404'
  }
]
export default routers