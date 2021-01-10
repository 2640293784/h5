<template>
    <van-nav-bar
    :title="title"
    :left-arrow="back"
    class="g-page-title"
    @click-left="onClickLeft"
    @click-right="onClickRight">
    <template v-if="isIcon" #right>
      <van-icon name="cross" class="icon-close"/>
    </template>
    </van-nav-bar>
</template>
<script>
export default {
  name: 'page-nav',
  watch: {
    $route: {
      handler (router) {
        if (this.link) {
          const { navTitle, title, backIcon } = router.meta
          this.title = navTitle || title
          this.leftUrl = this.backUrl || ''
          this.back = backIcon || true
        }
      },
      immediate: true
    }
  },
  data () {
    return {
      title: '',
      leftUrl: '',
      back: false,
      close: false
    }
  },
  props: {
    link: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    isIcon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickLeft () {
      if (this.leftUrl) {
        this.$router.push(this.leftUrl)
      } else {
        this.$router.go(-1)
      }
    },
    onClickRight () {
      this.$emit('on-close')
    }
  }
}
</script>
<style lang="less" scoped>
  .icon-close{
    font-size: 1rem;
    color: #c8c9cc;
  }
  .g-page-title{
    border-bottom: 1px solid #ebedf0;
  }
</style>
