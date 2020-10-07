<template>
  <div class="classify">
    <div class="classify-row">
      <van-sidebar v-model="activeKey" @change="sidebarChange">
        <van-sidebar-item :title="item.name" v-for="item in typeData" :key="item.id" />
      </van-sidebar>
      <g-pull-refresh
      :number="3"
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
    <g-footer-nav :active="1"></g-footer-nav>
  </div>
</template>
<script>
import { getTypeList,getProductByTypeId } from '@/api'
export default {
  name: 'classify',
  data () {
    return {
      loading:false,
      refreshing:false,
      finished:false,
      typeData: [],
      index:0,
      activeKey:0,
      list:[{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:2,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:3,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      },{
        id:1,
        url:'http://www.ruiyunzhushou.com/images/jifen/sp.png',
        text:'淘宝'
      }]
    }
  },
  mounted () {
    this.getTypeData()
    const { type } = this.$route.query
    this.activeKey = type*1 || 0
  },
  methods:{
    async getClassify () {
      let res =await getProductByTypeId({ typeId:this.activeKey, start:0, pageSize:18 })
    },
    async getTypeData () {
      let res = await getTypeList()
      if(res){
        this.typeData = res.data|| []
      }
    },
    sidebarChange(value){
      console.log(value)
    },
    pullList () {
      this.index++
      setTimeout(() => {
        if(this.index===5){
          this.finished=true
          this.loading = false
          return false;
        }
        this.list = this.list.concat(this.list)
        this.loading = false
      }, 1000);
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
    height: 100%;
    padding-bottom: 2.2rem;
  }
  .classify-row{
    display: flex;
    height: 100%;
    overflow: hidden;
  }
  .col-item{
    text-align: center;
    p{
      padding: .44rem 0;
    }
  }
</style>