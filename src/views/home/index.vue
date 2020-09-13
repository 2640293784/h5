<template>
  <div id="main-home">
    <van-sticky>
      <header>	
        <div class="jd-logo">
          <img src="@img/logo.png" />
        </div>
        <div class="search">
          <van-search v-model="value" shape="round" placeholder="请输入搜索关键词"/>
        </div>
        <div class="address">
          <router-link to="/address">北京</router-link>
        </div>	
      </header>
    </van-sticky>
    <g-swiper class="swiper" :list="swiperData"></g-swiper>
    	<!--导航-->
    <div class="nav">
      <van-row>
        <van-col span="6" class="col-item" v-for="item in list" :key="item.href">
          <router-link :to="item.href">
            <img :src="item.icon" />
            <p>{{item.text}}</p>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <g-footer-nav :active="0"></g-footer-nav>
  </div>
</template>
<script>
import { homeCarousel } from '@/api'
export default {
  name: 'main',
  data () {
    return {
      swiperData: [],
      list:[
    	     {
    	     	text:"积分商城",
    	     	icon:require("@assets/img/banner/1.png"),
    	     	href:'/integ'
    	     },
    	     {
    	     	text:"影音天地",
    	     	icon:require("@assets/img/banner/2.png"),
    	     	href:'/movie'
    	     },
    	     {
    	     	text:"生日专区",
    	     	icon:require("@assets/img/banner/3.png"),
    	     	href:'/cake'
    	     },
    	     {
    	     	text:"果园飘香",
    	     	icon:require("@assets/img/banner/4.png"),
    	     	href:'/fruit'
    	     },
    	     {
    	     	text:"婴儿用品",
    	     	icon:require("@assets/img/banner/5.png"),
    	     	href:'/classification/2'
    	     },
    	     {
    	     	text:"应季甄选",
    	     	icon:require("@assets/img/banner/6.png"),
    	     	href:'/season'
    	     },
    	     {
    	     	text:"大牌手机",
    	     	icon:require("@assets/img/banner/7.png"),
    	     	href:'/classification/0'
    	     },
    	     {
    	     	text:"美妆个护",
    	     	icon:require("@assets/img/banner/8.png"),
    	     	href:'/classification/1'
    	     }
    	]
    }
  },
mounted () {
 homeCarousel().then(res=>{
  const { data,status } = res
  if(status === 200){
this.swiperData = data;
  }
 })
}
}
</script>
<style lang="less" scoped>
#main-home {
  height: 100%;
}
.nav{
  padding: .53rem 0;
  .col-item{
    margin-bottom: .44rem;
  }
  a{
    text-align: center;
    line-height: .88rem;
    color: #838282;
    img{
      width: 2.2rem;
      height: 2.2rem;
      margin: 0 auto .27rem;
    }
  }
}
header{
  display: flex;
  background: white;
  .search{
      flex:1;
    }
  .jd-logo{
    width: 2rem;
    height: 2rem;
  }
  .address{
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    transition: .4s color;
    position: relative;
    &::after{
      display: block;
      position: absolute;
      top: .9rem;
      right: .43rem;
      content: '';
      width: 0;
      height: 0;
      border-top: .22rem solid #989898;
      border-left:.22rem solid transparent;
      border-right: .22rem solid transparent;
    }
    a{
      color: #989898;
    }
  }
}
</style>