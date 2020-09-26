<template>
  <div class="swiper">
    <div class="movie">
      <div class="movie-container">
        <div class="swiper-wrapper" v-for="item in 10" :key="item">
            <a href="Quick_ticket.html">
              <img src="http://www.ruiyunzhushou.com/images/move/index_11.png" />
              <p class="secskill-main clearfix">
                <span class="secskill-title-con">美国队长3</span>
                <span class="secskill-number">8.0</span>
              </p>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'main-movie-list'
}
</script>
<style lang="less" scoped>
    .swiper{
        padding:0 .7rem;
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
    width: 400%;
    height: 100%;
    >:last-child{
      padding-right: 0;
      p{
        padding-right: 0;
      }
    }
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