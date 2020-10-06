<template>
  <div class="birthday">
    <g-swiper class="birthary-swiper" :list="swiperData"></g-swiper>
    <div class="birthday-selected clearfix">
      <div class="birthday-selected-left fl">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/fuirt.png" alt="">
        </router-link>
      </div>
      <div class="birthday-selected-right fl">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birthday_05.png" alt="">
        </router-link>
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birthday_05.png" alt="">
        </router-link>
      </div>
    </div>
    <van-divider class="bitrhday-divider">为你推荐</van-divider>
    <van-row>
      <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
      <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
      <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
            <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
      <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
      <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
            <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
      <van-col span="12">
        <router-link to="/details/1">
          <img src="http://www.ruiyunzhushou.com/images/birthday/birth.png" alt="">
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: 'birthday',
  data () {
    return {
      swiperData: []
    }
  },
  mounted () {
    this.swiperData = [
        {
          url:"http://www.ruiyunzhushou.com/images/birthday/banner3.png"
        },{
          url:'http://www.ruiyunzhushou.com/images/birthday/banner.jpg'
        },{
          url:'http://www.ruiyunzhushou.com/images/birthday/banner1.png'
        }
      ]
  }
}
</script>
<style lang="less" scoped>
.birthday{
  height: calc(100% - 2rem);
  overflow: auto;
  padding: 0 1%;
}
.birthday-selected{
  background-color: white;
  padding-top: 1rem;
}
 .birthday-selected-left{
   width: 34.91%;
 }
.birthday-selected-right{
   width: 64.09%;
   margin-left: 1%;
 }
 .bitrhday-divider{ 
   border-color: #07c160;
   margin: .5rem 0;
   color: #666;
    }
</style>