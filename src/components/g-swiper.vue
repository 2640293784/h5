<template>
  <van-swipe :autoplay="autoplay" indicator-color="red">
    <van-swipe-item @click="swiperItem(index,item)" :key="index" v-for="(item,index) in newList">
      <slot :swiperItem="item" :swiperIndex="index">
        <img v-if="lazyLoad" v-lazy="item.url"/>
        <img v-else :src="item.url"/>
      </slot>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { isObj } from '@utils'
export default {
  name: 'swiper',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 3000
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    list: {
      handler (newVal) {
        this.newList = newVal.map(item => {
          return isObj(item) ? item : { url: item }
        })
      },
      deep: true,
      immediate: true
    }
  },
  data () {
    return {
      newList: []
    }
  },
  methods: {
    swiperItem (index, item) {
      this.$emit('touch', index, item)
    }
  }
}
</script>
