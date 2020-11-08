<template>
  <div class="pull-refresh" >
    <van-overlay :show="loading" class="overlay-index">
      <div class="loading-center">
        <van-loading color="#07c160" vertical>{{loadingText}}</van-loading>
      </div>
    </van-overlay>
    <van-pull-refresh
      v-model="refreshing"
      class="pull-refresh-container"
      :success-text="success-text"
      @refresh="onRefresh">
        <van-empty v-if="list.length===0&&refreshing" class="empty" :description="noText" />
        <van-list
          v-show="list.length!==0"
          v-model="pullLoading"
          :finished="finished&&!refreshing"
          ref="text"
          :finished-text="finishedText"
          @load="onLoad"
        >
          <div class="container" :style="{gridTemplateColumns: `repeat(auto-fill, ${100/number}%)`}">
            <div v-for="(item,index) in list" :key="item">
              <slot name="child" :item="item" :index="index">{{item}}</slot>
            </div>
          </div>
        </van-list>
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
    finished: false, // 判断时候否加载完毕
    list: {
      type: Array,
      default: () => []
    },
    loading: { // 全局loading
      type: Boolean,
      default: false
    },
    pullLoading: { // 下拉加载loading
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
    }
  },
  mounted () {
    this.$nextTick(() => {
      const height = this.$refs.text.$parent.$el.offsetHeight
      this.$refs.text.$el.style.height = `${height}px`
    })
  },
  methods: {
    onLoad () {
      this.$emit('pull-down')
    },
    onRefresh () {
      this.$emit('drop-down')
      this.refreshing = false
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
  .pull-refresh-container{
    height: 100%;
    overflow-y: auto;
  }
  .empty{
    width: 100%;
    height: 100%;
  }
  .container{
     display: grid;
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
</style>
