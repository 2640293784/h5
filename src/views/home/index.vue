<template>
  <div id="main-home">
    <div class="main-container">
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
      <van-notice-bar left-icon="volume-o" text="夏季炎热签收水果前请确认"/>
      <g-title title="最新上映" link to="/mivie"></g-title>
      <movie-list :list="movieData"></movie-list>
      <g-title title="生日专区" link to="/birthday"></g-title>
      <div class="epecial-area">
        <div class="epecial-area-left">
          <router-link to="/details/1">
            <img src="http://www.ruiyunzhushou.com/images/birthday/fuirt.png" alt="">
          </router-link>
        </div>
        <div>
            <router-link to="/details/1">
              <img src="http://www.ruiyunzhushou.com/images/birthday/friut2.png" alt="">
            </router-link>
          <div class="epecial-area-right">
            <div>
              <router-link to="/details/1">
                <img src="http://www.ruiyunzhushou.com/images/birthday/birth3.png" alt="">
              </router-link>
            </div>
            <div>
              <router-link to="/details/1">
                <img src="http://www.ruiyunzhushou.com/images/birthday/birth3-07.png" alt="">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <g-title title="果园飘香" link to="/fruit"></g-title>
      <div class="epecial-area">
        <div class="epecial-area-left">
          <router-link to="/details/1">
            <img src="http://www.ruiyunzhushou.com/images/furit/fuirt-08.png" alt="">
          </router-link>
        </div>
        <div>
          <router-link to="/details/1">
            <img src="http://www.ruiyunzhushou.com/images/furit/friut2-09.png" alt="">
          </router-link>
          <router-link to="/details/1">
            <img src="http://www.ruiyunzhushou.com/images/furit/friut2-10.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <g-footer-nav :active="0"></g-footer-nav>
  </div>
</template>
<script>
import { homeCarousel, getMovieList, getBirthList, getFruitList } from '@/api'
import MovieList from './movie-list'
export default {
  name: 'main',
  data () {
    return {
      swiperData: [],
      movieData: [],
      birthData: [],
      fruitData: [],
      list: [
        { text: '积分商城', icon: require('@assets/img/banner/1.png'), href: '/integ' },
        { text: '影音天地', icon: require('@assets/img/banner/2.png'), href: '/movie' },
        { text: '生日专区', icon: require('@assets/img/banner/3.png'), href: '/birthday' },
        { text: '果园飘香', icon: require('@assets/img/banner/4.png'), href: '/fruit' },
        { text: '婴儿用品', icon: require('@assets/img/banner/5.png'), href: '/classification/2' },
        { text: '应季甄选', icon: require('@assets/img/banner/6.png'), href: '/selection' },
        { text: '大牌手机', icon: require('@assets/img/banner/7.png'), href: '/classification/0' },
        { text: '美妆个护', icon: require('@assets/img/banner/8.png'), href: '/classification/1' }
      ]
    }
  },
  components: { MovieList },
  mounted () {
    this.$toast.loading({
      duration: 0
    })
    Promise.all([this.getCarousel(), this.getMovie()], this.getBirth(), this.getFruit()).then(() => {
      this.$toast.clear()
    }).catch(() => {
      this.$toast.clear()
    })
  },
  methods: {
  // 获取轮播图
    async getCarousel () {
      const res = await homeCarousel()
      if (res) {
        this.swiperData = res.data || []
      }
    },
    // 获取电影列表
    async getMovie () {
      const res = await getMovieList()
      if (res) {
        this.movieData = res.data || []
      }
    },
    async getBirth () {
      const res = await getBirthList()
      if (res) {
        this.birthData = res.data || []
      }
    },
    async getFruit () {
      const res = await getFruitList()
      if (res) {
        this.fruitData = res.data || []
      }
    }
  }
}
</script>
<style lang="less" scoped>
  #main-home {
    height: 100%;
    overflow: hidden;
  }
  .main-container{
    height: 100%;
    padding-bottom: 2.44rem;
    overflow-y: auto;
  }
  span.secskill-icon{
  display: inline-block;
  margin-left: .44rem;
  width: .88rem;
  height: .71rem;
  background-position: -.18rem -6.49rem;
  margin-top:15px;
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
  .epecial-area{
    display: flex;
  }
  .epecial-area-left{
    width: 86.04%;
  }
  .epecial-area-right{
    display: flex;
  }
</style>
