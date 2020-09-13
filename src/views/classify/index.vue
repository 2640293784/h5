<template>
  <div class="classify">
    <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2">
        1111
      </van-dropdown-item>
    </van-dropdown-menu>
    </div>
    <div class="classify-row">
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
      <g-pull-refresh
      :number="3"
      :loading="loading"
      :refreshing="refreshing"
      :list="list"
      @pull-down="pullList"
      @drop-down="dropList"
      >
        <template #item="{ item }" >
          <router-link :to="item.href">
            <img :src="item.url" />
            <p>{{item.text}}</p>
          </router-link>
        </template> 
      </g-pull-refresh>
    </div>
    <g-footer-nav :active="1"></g-footer-nav>
  </div>
</template>
<script>
export default {
  name: 'classify',
  data () {
    return {
      loading:false,
      refreshing:false,
      activeKey:0,
      value1:0,
      value2:0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 0 },
        { text: '0-100元', value: 1 },
        { text: '100-200元', value: 2 },
        { text: '200-300元', value: 3 },
        { text: '300-400元', value: 4 },
        { text: '4-500元', value: 5 },
        { text: '500-700元', value: 6 },
        { text: '700-1000元', value: 7 },
        { text: '1000-2000元', value: 8 },
        { text: '1000-2000元', value: 9 }
      ],
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
    },
    pullList () {
        this.list = this.list.concat(this.list)
console.log(123)
    },
    dropList () {
      const list = this.list
      this.list = []
      this.refreshing = true
      setTimeout(() => {
        this.list = list
        this.refreshing = false
      }, 1000);
    }
  }
}
</script>
<style lang="less" scoped>
  .classify{
    // display: flex;
    height: 100%;
    padding-bottom: 2.2rem;
  }
  .classify-row{
    display: flex;
  }
  .col-item{
    p{
      padding-top: .53rem;
    }
  }
</style>