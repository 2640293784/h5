// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)
const routers = [
  {
    path: '/',
    component: _import('home'),
    name: 'home',
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
      title: '购物车',
      isLogin: true
    }
  },
  {
    path: '/details/:id',
    component: _import('details'),
    name: 'details',
    meta: {
      title: '产品详情',
      show: true
    }
  },
  {
    path: '/birthday',
    component: _import('birthday'),
    name: 'birthday',
    meta: {
      title: '生日专区',
      show: true
    }
  },
  {
    path: '/fruit',
    component: _import('fruit'),
    name: 'fruit',
    meta: {
      title: '果园飘香',
      show: true
    }
  },
  {
    path: '/selection',
    component: _import('selection'),
    name: 'selection',
    meta: {
      title: '应季甄选',
      show: true
    }
  },
  {
    path: '/users',
    component: _import('users'),
    name: 'users',
    meta: {
      title: '个人中心',
      isLogin: true
    }
  },
  {
    path: '/users/information',
    component: _import('users/information'),
    name: 'usersInformation',
    meta: {
      title: '基本信息',
      isLogin: true,
      show: true
    }
  },
  {
    path: '/users/address',
    component: _import('users/address'),
    name: 'usersAddress',
    meta: {
      title: '收货地址',
      isLogin: true,
      show: true
    }
  },
  {
    path: '/users/order',
    component: _import('users/order'),
    name: 'usersOrder',
    meta: {
      title: '我的订单',
      isLogin: true,
      show: true
    }
  },
  {
    path: '/users/recharge',
    component: _import('users/recharge'),
    name: 'usersRecharge',
    meta: {
      title: '账户充值',
      isLogin: true,
      show: true
    }
  },
  {
    path: '/demo',
    component: _import('demo'),
    name: 'demo',
    meta: {
      title: 'demo',
      show: true
    }
  },
  {
    path: '/404',
    component: _import('main/404'),
    name: '404'
  }
]
export default routers
