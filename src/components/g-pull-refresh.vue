<template>
  <van-pull-refresh class="pull-refresh" v-model="refreshing" @refresh="onRefresh">
  <van-empty v-if="list.length===0" class="empty" description="暂无内容" />
  <van-list
    v-else
    v-model="loading"
    :finished="finished&&!refreshing"
    :finished-text="finishedText"
    @load="onLoad"
  >
    <div class="container" :style="{gridTemplateColumns: `repeat(auto-fill, ${100/number}%)`}">
      <div v-for="(item,index) in list" :key="item">
        <slot name="item" :item="item" :index="index">{{item}}</slot>
      </div>
    </div>
  </van-list>
</van-pull-refresh>
</template>
<script>
export default {
  name:'pull-refresh',
  props:{
  finishedText:{
    type:String,
    default:'没有更多了'
  },
  description:{
    type:String,
    default:'暂无内容'
  },
  list:{
    type:Array,
    default:()=>[]
  },
  loading:{//下拉加载loading
    type:Boolean,
    default:false
  },
  refreshing:{//上拉加载loading
    type:Boolean,
    default:false
  },
  number:{
    type:Number,
    default:1
  }
  },
  data() {
    return {
      finished: false//判断时候否加载完毕
    };
  },
  methods: {
    onLoad() {
      this.$emit('pull-down')
    },
    onRefresh() {
      this.$emit('drop-down')
      this.refreshing = false
    },
  },
};
</script>
<style lang="less" scoped>
  .pull-refresh{
    width: 100%;
    overflow: auto;
  }
  .empty{
    width: 100%;
    height: 100%;
  }
  .container{
     display: grid;
  }
</style>