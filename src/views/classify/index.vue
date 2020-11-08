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
            <van-image class="col-image" :lazy-load="item.url" :src="item.url" />
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
      typeData: [],
      index: 0,
      activeKey: 0,
      list: []
    }
  },
  mounted () {
    this.getTypeData()
  },
  methods: {
    async getClassify () {
      const typeId = this.typeData[this.activeKey].id
      const res = await getProductByTypeId({ typeId, page: this.index, pageSize: 18 }) || {}
      if (res && res.data) {
        this.finished = !res.data.data || res.data.data.length === 0
        if (!this.finished) {
          this.list = this.list.concat(res.data.data)
        }
      }
      this.refreshing = false
      this.loading = false
    },
    async getTypeData () {
      const res = await getTypeList()
      if (res) {
        const { type } = this.$route.query
        this.typeData = res.data || []
        this.activeKey = type || 0
        this.getClassify()
      }
    },
    sidebarChange () {
      this.list = []
      this.getClassify()
    },
    pullList () {
      this.loading = true
      this.index++
      this.getClassify()
    },
    dropList () {
      this.index = 0
      this.list = []
      this.refreshing = true
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
