<template>
  <div class="swiper">
    <div class="movie">
      <div class="movie-container" :style="{width:`${list.length*6.25}rem`}">
        <div class="swiper-wrapper" v-for="item in list" :key="item.id">
            <a href="Quick_ticket.html">
              <img :src="`http://192.168.1.102:3001${item.img_url}`" />
              <p class="secskill-main clearfix">
                <span class="secskill-title-con">{{item.name}}</span>
                <span class="secskill-number">{{item.grade}}</span>
              </p>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main-movie-list',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="less" scoped>
  .swiper{
    padding-left: .7rem;
  }
  .movie{
    width: 100%;
    height: 7rem;
    overflow-x: auto;
    &::-webkit-scrollbar{
      height: 0;
    }
    .swiper-wrapper{
      padding-right: .7rem;
      width: 6.25rem;
      height: 100%;
      overflow: hidden;
      position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        p{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        padding-right: .7rem;
        zoom: 1;
      }
    }
  }
  .movie-container{
    display: flex;
    height: 100%;
  }
  .secskill-title-con{
    color: white;
    float: left;
    margin-left: .4rem;
    }
  .secskill-number{
    float: right;
    color: #fa4802;
    margin-right: .4rem;
  }
</style>
