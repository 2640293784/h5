<template>
  <div class="details">
    <div class="details-container details-container-top">
      <div class="details-images">
        <img src="http://www.ruiyunzhushou.com/images/gg/gg_03.png">
      </div>
      <p class="deta_con">北美电器（ACA）面包机全自动家用 彩钢全新升级款AB-DCN03</p>
      <p class="deta_con danger">49积分</p>
      <div class="details-number">
        <label>数量：</label><van-stepper v-model="detailsObj.number" />
      </div>
    </div>
    <div class="details-container">
      <ul class="details-tab">
        <li :class="{danger:tabIndex===0}" @click="tabIndex=0">详情</li>
        <li :class="{danger:tabIndex===1}" @click="tabIndex=1">规格</li>
      </ul>
      <div v-if="tabIndex===0">
        <img src="http://www.ruiyunzhushou.com/images/xqq/sp_2.png">
        <img src="http://www.ruiyunzhushou.com/images/xqq/sp_1.png">
      </div>
      <div v-if="tabIndex===1">
        <p class="detail_main">品牌及名称：海尔变频空调海尔变频空调</p>
        <p class="detail_main">型号：AB-DCN03</p>
        <p class="detail_main">规格：280x308x292</p>
        <p class="detail_main">材质：钢化模型</p>
        <p class="detail_main">产地：上海</p>
        <p class="detail_main">配送时间：我们会在您下单后的2-3个工作日内日发货</p>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon>
        <i class="iconfont">&#xe612;</i>
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  name: 'details',
  data () {
    return {
      tabIndex: 0,
      detailsObj: {
        number: 1
      }
    }
  },
  methods: {
    onClickIcon () {

    }
  }
}
</script>
<style lang="less" scoped>
.details{
  overflow: auto;
  height: calc(100% - 50px);
  padding-bottom: 50px;
}
  .details-images{
    padding: 5% 10%;
  }
  .details-container{
    background-color: white;
  }
  .details-container-top{
    padding-bottom: .44rem;
    margin-bottom: .44rem;
  }
  .details-tab{
    display: flex;
    li{
      height: 2.25rem;
      line-height: 2.25rem;
      text-align: center;
      flex: 1;
      position: relative;
      &:first-child::after{
        content: "";
        position: absolute;
        top: 50%;
        right: 0px;
        margin-top: -0.5rem;
        width: 1px;
        height: 1.2rem;
        background: #ccc;
      }
    }
  }
  .details-number{
    display: flex;
    label{
      line-height: 28px;
    }
  }
</style>
