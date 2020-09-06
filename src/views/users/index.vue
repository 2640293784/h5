<template>
  <div class="user-info">
    <div class="my_info">
			<img src="@img/user/bj.png"/>
			<div class="my_mian">
				<p class="my_pic">
					<label>
						<input accept="image/*;capture=camera" @change="upload" type="file"/>
						<img :src="user.picture||require('@img/user/my_03.png')" class="user_img"/>
					</label>
				</p>
				<span class="my_number">{{user.userName}}</span>
				<span class="my_txt">余额：{{user.integral}}积分</span>
			</div>
		</div>
    <van-cell is-link>
      <div class="user-cell">
        <img src="@img/user/main_04.png">
        <span>我的订单</span>
      </div>
    </van-cell>
    <van-cell is-link>
      <div class="user-cell">
        <img src="@img/user/main_11.png">
        <span>收货地址</span>
      </div>
    </van-cell>
    <van-cell is-link>
      <div class="user-cell">
        <img src="@img/user/main_13.png">
        <span>账号充值</span>
      </div>
    </van-cell>
    <van-cell is-link>
      <div class="user-cell">
        <img src="@img/user/main_15.png">
        <span>余额转移</span>
      </div>
    </van-cell>
    <div class="sign-out">
      <van-button type="danger">退出登陆</van-button>
    </div>
    <g-footer-nav :active="3"></g-footer-nav>
  </div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {
      user:{}
    }
  }
}
</script>
<style lang="less" scoped>
.user-info{
  height: 100%;
}
.user-cell{
  display: flex;
  img{
    width: 1rem;
    margin-right: .5rem;
  }
}
.my_info{
	width: 100%;
  position: relative;
  .my_mian{
	position: absolute;
	left: 0;
	bottom: 0;
	right: 0;
	top: 0;
	margin: auto;
	width: 40%;
  height: 5.56rem;
  .my_pic{
	width: 55%;
  margin: 0 auto;
  input{
    display: none;
  }
}
}
span{
	width: 100%;
	display: inline-block;
	line-height: 22px;
	text-align: center;
	color: #fff;
}
span.my_number{
	font-size: 0.8rem;
	margin-top: .98rem;
}
}
.sign-out{
  padding: 2rem;
  button{
    width: 100%;
  }
}
</style>