<template>
  <van-tabbar v-model="newActive" class="tabbar"  @change="onChange">
    <van-tabbar-item class="tabbar-item__text">
      <i class="iconfont">&#xe612;</i>
      <p class="inco_txt">首页</p>
    </van-tabbar-item>
    <van-tabbar-item class="tabbar-item__text">
      <i class="iconfont">&#xe660;</i>
      <p class="inco_txt">分类</p>
    </van-tabbar-item>
    <van-tabbar-item class="tabbar-item__text">
      <i class="iconfont">&#xe63e;</i>
      <p class="inco_txt">购物车</p>
    </van-tabbar-item>
    <van-tabbar-item class="tabbar-item__text">
      <i class="iconfont">&#xe62e;</i>
      <p class="inco_txt">我的</p>
    </van-tabbar-item>
  </van-tabbar>
<!--tabbar-->
</template>
<script>
	export default{
		name:'FooterNav',
		props:{
			active:{
				type:String,
				default:0
			}
		},
		data(){
			return{
        newActive:this.active
      }
		},
    methods:{
      onChange(val){
        const routerList = ['/','/classify','/shoppingCart','/users']
        this.$router.push(routerList[val])
      }
    }
	}
</script>
<style lang="less" scoped>
.tabbar{
	box-shadow: 0 -0.13rem 0.22rem #ccc;
	 height: 2rem;
}
.tabbar-item__text{
  text-align: center;
  font-size: .62rem;
  i{
    margin-bottom: .15rem;
  }
}
</style>