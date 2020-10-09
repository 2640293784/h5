<template>
<div class="user-order">
  <div>
    <div class="user-order-container" v-for="(item,index) in list" :key="index">
      <div class="user-order-top">
        <span>编号：12345678</span>
        <span class="success">已发货</span>
      </div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
      </van-card>
    </div>
  </div>
  <van-row>
    <van-col :span="12" class="user-like-col">
      <div class="user-like-container">
        <img src="http://www.ruiyunzhushou.com/images/jifen/sp.png">
        <p>迷你智能电饭煲HYFG-1016</p>
        <p class="int_color">86.0积分</p>
      </div>
    </van-col>
    <van-col :span="12" class="user-like-col">
      <div class="user-like-container">
        <img src="http://www.ruiyunzhushou.com/images/jifen/sp.png">
        <p>迷你智能电饭煲HYFG-1016</p>
        <p class="int_color">86.0积分</p>
      </div>
    </van-col>
  </van-row>
</div>
</template>
<script>
export default {
  name: 'user-order',
  data () {
    return {
      flagEnum: {
        1: '待付款',
        2: '待发货',
        3: '已发货'
      },
      list: [
        {
          number: 2,
          price: '2.00',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
          title: '商品标题',
          imageUel: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          index: '1234567890',
          type: 1
        },
        {
          number: 2,
          price: '2.00',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
          title: '商品标题',
          imageUel: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          index: '1234567890',
          type: 2
        },
        {
          number: 2,
          price: '2.00',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
          title: '商品标题',
          imageUel: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          index: '1234567890',
          type: 3
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
 .user-order{
   height: calc(100% - 46px);
   overflow-y: auto;
 }
 .user-order-top{
   background: white;
   display: flex;
   justify-content: space-between;
   padding: .44rem;
   border-bottom: 1px solid #f2f2f2;
 }
 .user-order-container{
   margin: .44rem 0;
 }
 .user-like-col{
   margin-bottom: .5rem;
   &:nth-child(odd){
    padding-right: .25rem;
   }
  &:nth-child(even){
    padding-left: .25rem;
   }
 }
 .user-like-container{
   background-color: white;
   p{
    font-size: 0.6rem;
    line-height: 0.9rem;
    height: auto;
   }
 }
</style>
