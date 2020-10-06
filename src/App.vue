<template>
  <transition name="fade">
    <div class="container">
      <g-page-title link v-if="isTitle"></g-page-title>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script>
export default {
  name:'app',
  data:{
    isTitle:false
  },
  watch:{
    '$route':{
      handler(router){
        this.isTitle = router.meta.show || false
      },
      immediate:true
    }
  }
}
</script>
<style lang="less" scoped>
 .container{
   height: 100%;
 }
</style>