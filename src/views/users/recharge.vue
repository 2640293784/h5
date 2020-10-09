<template>
  <div class="recharge">
  <van-cell-group>
    <van-cell>
      <div>
        <label>昵称：</label>
        <span>{{formData.username}}</span>
      </div>
    </van-cell>
    <van-cell>
      <div>
        <label>编号：</label>
        <span>{{formData.intergralId}}</span>
      </div>
    </van-cell>
    <van-cell>
      <div>
        <label>余额：</label>
        <span>{{formData.balance}}</span>
      </div>
    </van-cell>
  </van-cell-group>
  <div class="recharge-container">
    <p class="account_title">充值金额</p>
    <van-row>
      <van-col class="recharge-col" span="8" v-for="(item,index) in list" :key="index">
        <div class="recharge-col-container" @click="active=index" :class="{'recharge-col-active':active===index}">
          <p>{{item.integral}}积分</p>
          <p>售价{{item.moneny}}元</p>
        </div>
      </van-col>
    </van-row>
  </div>
  <div class="recharge-btn">
    <van-button class="van-button--block" type="primary" @click="submit" :disabled="subDisabled">确认充值</van-button>
  </div>
  </div>
</template>
<script>
import { userRecharge, userInfo } from '@/api'
export default {
  name: 'userRecharge',
  data () {
    return {
      subDisabled: false,
      formData: {},
      active: 0,
      list: [
        { moneny: 30, integral: 30 },
        { moneny: 50, integral: 60 },
        { moneny: 80, integral: 100 },
        { moneny: 100, integral: 125 },
        { moneny: 150, integral: 180 },
        { moneny: 200, integral: 250 }
      ]
    }
  },
  mounted () {
    userInfo().then(res => {
      if (res) {
        this.formData = res.data || {}
      }
    })
  },
  methods: {
    async submit () {
      this.subDisabled = true
      const { integral } = this.list[this.active]
      const res = await userRecharge({ nums: integral })
      if (res) {
        this.$notify({
          type: 'success',
          message: '充值成功',
          duration: 500,
          onClose: () => {
            this.formData.balance = res.data.balance
          }
        })
      }
      this.subDisabled = false
    }
  }
}
</script>
<style lang="less" scoped>
.recharge-container{
  background-color: white;
  padding: .44rem 0;
  margin-top: .67rem;
}
  .account_title{
    height: 1.2rem;
    margin-top: 0.5rem;
    color: #282828;
    padding-left: .44rem;
    font-size: 0.8rem;
  }
  .recharge-col{
    padding: .44rem;
  }
  .recharge-col-container{
    text-align: center;
    height: 2.3rem;
    border-radius: .18rem;
    border: 1px solid #c3c3c3;
    p{
      line-height: 1.1rem;
      font-size: .6rem;
      color: #333;
    }
  }
  .recharge-col-active{
    border: 1px solid #ED0012;
    p{
      color: #ED0012;
    }
  }
  .recharge-btn{
    padding: 0 .44rem;
    position: fixed;
    bottom: 2rem;
    width: 100%;
  }
</style>
