<template>
  <div class="pull-refresh" >
    <van-overlay :show="loading" class="overlay-index">
      <div class="loading-center">
        <van-loading color="#07c160" vertical>{{loadingText}}</van-loading>
      </div>
    </van-overlay>
    <van-pull-refresh
      v-model="refreshing"
      class="pull-refresh-parent"
      :success-text="successText"
      @refresh="onRefresh">
      <van-empty v-if="list.length===0&&refreshing" class="empty" :description="noText" />
      <div @scroll="onLoad" ref="pull-refresh" class="pull-refresh-container">
        <div class="container" :style="{gridTemplateColumns: `repeat(auto-fill, ${100/number}%)`}">
          <div v-for="(item,index) in list" :key="index">
            <slot name="child" :item="item" :index="index">{{item}}</slot>
          </div>
        </div>
        <div class="pull-refresh-loading">
          <van-loading size="24px" v-if="pullLoading">加载中...</van-loading>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  name: 'pull-refresh',
  props: {
    finishedText: {
      type: String,
      default: '没有更多了'
    },
    getData: {
      type: Function,
      required: true
    },
    params: {
      type: Object,
      default: () => ({})
    },
    noText: {
      type: String,
      default: '暂无内容'
    },
    successText: {
      type: String,
      default: ''
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    pageSize: {
      type: Number,
      default: 10
    },
    page: {
      type: Number
    },
    loading: { // 全局loading
      type: Boolean,
      default: false
    },
    refreshing: { // 上拉加载loading
      type: Boolean,
      default: false
    },
    number: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      pageOption: {
        page: 1
      },
      finished: false, // 判断时候否加载完毕
      pullLoading: false,
      list: []
    }
  },
  mounted () {
    this.pageOption.pageSize = this.pageSize
  },
  methods: {
    init () {
      this.list = []
      this.pageOption.page = 1
      this.getList()
    },
    async getList () {
      this.pullLoading = true
      const res = await this.getData({ ...this.params, ...this.pageOption }) || {}
      if (res && res.data) {
        this.finished = !res.data.data || res.data.data.length === 0
        if (!this.finished) {
          this.list = [...this.list, ...res.data.data]
        }
      }
      this.pullLoading = false
      this.refreshing = false
    },
    onLoad () {
      const { scrollTop, offsetHeight, scrollHeight } = this.$refs['pull-refresh']
      if (Math.ceil(scrollTop) + offsetHeight === scrollHeight && !this.pullLoading) {
        this.getList()
        // this.$emit('pull-down')
      }
    },
    onRefresh () {
      this.init()
      // this.$emit('drop-down')
      // this.refreshing = false
    }
  }
}
</script>
<style lang="less" scoped>
  .pull-refresh{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .pull-refresh-parent{
    height: 100%;
  }
  .pull-refresh-container{
    height: 100%;
    box-sizing:border-box;
    overflow-y: auto;
  }
  .container{
    display: grid;
  }
  .empty{
    width: 100%;
    height: 100%;
  }
  .loading-center{
    height: 100%;
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .overlay-index{
    z-index: 10000;
  }
  .pull-refresh-loading{
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
</style>
