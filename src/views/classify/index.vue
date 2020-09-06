<template>
  <div class="classify">
    <van-sidebar v-model="activeKey" @change="sidebarChange">
      <van-sidebar-item title="积分商城" />
      <van-sidebar-item title="影音天地" />
      <van-sidebar-item title="生日专区" />
      <van-sidebar-item title="关爱健康" />
      <van-sidebar-item title="应季甄选" />
      <van-sidebar-item title="果园飘香" />
      <van-sidebar-item title="轻松出行" />
      <van-sidebar-item title="景点门票" />
      <van-sidebar-item title="文玩空间" />
    </van-sidebar>
    <van-row class="classify-row">
      <van-col span="8" class="col-item" v-for="item in list" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.url" />
          <p>{{item.text}}</p>
        </router-link>
      </van-col>
            <van-col span="8" class="col-item" v-for="item in list" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.url" />
          <p>{{item.text}}</p>
        </router-link>
      </van-col>      <van-col span="8" class="col-item" v-for="item in list" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.url" />
          <p>{{item.text}}</p>
        </router-link>
      </van-col>
    </van-row>
    <g-footer-nav :active="1"></g-footer-nav>
  </div>
</template>
<script>
export default {
  name: 'classify',
  data () {
    return {
      activeKey:0,
      list:[{
        href:'/',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599398059231&di=8501d8d13514f0296b2de40ea5636c37&imgtype=0&src=http%3A%2F%2F5.pic.paopaoche.net%2Fup%2F2016-10%2F2016101316577.png',
        text:'淘宝'
      },{
        href:'/',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599398059231&di=8501d8d13514f0296b2de40ea5636c37&imgtype=0&src=http%3A%2F%2F5.pic.paopaoche.net%2Fup%2F2016-10%2F2016101316577.png',
        text:'淘宝'
      },{
        href:'/',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599398059231&di=8501d8d13514f0296b2de40ea5636c37&imgtype=0&src=http%3A%2F%2F5.pic.paopaoche.net%2Fup%2F2016-10%2F2016101316577.png',
        text:'淘宝'
      },{
        href:'/',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599398059231&di=8501d8d13514f0296b2de40ea5636c37&imgtype=0&src=http%3A%2F%2F5.pic.paopaoche.net%2Fup%2F2016-10%2F2016101316577.png',
        text:'淘宝'
      },{
        href:'/',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599398059231&di=8501d8d13514f0296b2de40ea5636c37&imgtype=0&src=http%3A%2F%2F5.pic.paopaoche.net%2Fup%2F2016-10%2F2016101316577.png',
        text:'淘宝'
      },{
        href:'/',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599398059231&di=8501d8d13514f0296b2de40ea5636c37&imgtype=0&src=http%3A%2F%2F5.pic.paopaoche.net%2Fup%2F2016-10%2F2016101316577.png',
        text:'淘宝'
      },{
        href:'/',
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599398059231&di=8501d8d13514f0296b2de40ea5636c37&imgtype=0&src=http%3A%2F%2F5.pic.paopaoche.net%2Fup%2F2016-10%2F2016101316577.png',
        text:'淘宝'
      }]
    }
  },
  methods:{
    sidebarChange(value){
      this.$toast('提示文案');
      console.log(value)
    }
  }
}
</script>
<style lang="less" scoped>
  .classify{
    display: flex;
    height: 100%;
    padding-bottom: 2.2rem;
  }
  .classify-row{
    flex:1;
    text-align: center;
    height: 100%;
    overflow-y: auto;
  }
  .col-item{
    p{
      padding-top: .53rem;
    }
  }
</style>