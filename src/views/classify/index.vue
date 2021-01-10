<template>
  <div class="classify">
    <div class="classify-row">
      <van-sidebar v-model="activeKey" @change="sidebarChange">
        <van-sidebar-item :title="item.name" v-for="item in typeData" :key="item.id" />
      </van-sidebar>
      <g-pull-refresh
      :number="3"
      :getData="getProductByTypeId"
      ref="pullRefresh"
      :params="getDataPar"
      >
        <template #child="{ item }" >
          <router-link class="col-item" :to="`/details/${item.id}`">
            <van-image class="col-image" :lazy-load="true" :src="item.url" />
            <p>{{item.text}}</p>
          </router-link>
        </template>
      </g-pull-refresh>
    </div>
    <g-footer-nav :active="1"></g-footer-nav>
  </div>
</template>
<script>
import { getTypeList, getProductByTypeId } from '@/api'
export default {
  name: 'classify',
  data () {
    return {
      loading: false,
      refreshing: false,
      finished: false,
      getDataPar: {
        activeKey: 0
      },
      getProductByTypeId,
      typeData: [],
      index: 0,
      activeKey: 0
    }
  },
  mounted () {
    this.getTypeData()
  },
  methods: {
    async getTypeData () {
      const res = await getTypeList() || {}
      if (res.data) {
        const { type } = this.$route.query
        this.typeData = res.data || []
        this.activeKey = type || 0
        this.$refs.pullRefresh.init()
      }
    },
    sidebarChange (val) {
      this.getDataPar.activeKey = val
      this.$refs.pullRefresh.init()
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
    .col-image{
      width: 100%;
      height:4.25rem;
    }
    p{
      padding: .44rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
