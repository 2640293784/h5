<template>
  <div class="selection">
    <img src="@img/zhenxu.png" alt="">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2"/>
    </van-dropdown-menu>
    <div class="selection-list">
      <g-pull-refresh
        :number="2"
        :pullLoading="loading"
        :finished="finished"
        :refreshing="refreshing"
        :list="list"
        @pull-down="pullList"
        @drop-down="dropList"
        >
          <template #child="{ item }" >
            <router-link class="col-item" :to="`/details/${item.id}`">
              <img :src="item.url" />
              <p>{{item.text}}</p>
            </router-link>
          </template>
        </g-pull-refresh>
    </div>
  </div>
</template>
<script>
export default {
  name: 'selection',
  data () {
    return {
      loading: false,
      refreshing: false,
      finished: false,
      value1: 0,
      value2: 0,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 0 },
        { text: '按销量', value: 1 },
        { text: '按价格从高到低', value: 2 },
        { text: '按价格从低到高', value: 3 }
      ],
      list: [{
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/friut/fruit_16.png',
        text: '淘宝'
      }, {
        id: 2,
        url: 'http://www.ruiyunzhushou.com/images/friut/fruit_20.png',
        text: '淘宝'
      }, {
        id: 3,
        url: 'http://www.ruiyunzhushou.com/images/friut/fruit_16.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/friut/fruit_16.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }, {
        id: 1,
        url: 'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text: '淘宝'
      }]
    }
  },
  methods: {
    pullList () {
      this.index++
      setTimeout(() => {
        if (this.index === 5) {
          this.finished = true
          this.loading = false
          return false
        }
        this.list = this.list.concat(this.list)
        this.loading = false
      }, 1000)
    },
    dropList () {
      const list = this.list
      this.list = []
      this.refreshing = true
      setTimeout(() => {
        this.list = list
        this.refreshing = false
      }, 1000)
    }
  }
}
</script>
<style lang="less" scoped>
  .selection{
    height: calc(100% - 2rem);
    overflow: hidden;
  }
  .selection-list{
    height: calc(100% - 9rem);
    overflow: hidden;
  }
</style>
