<template>
	<div class="page-container">
        <h1>登陆</h1>
        <form autocomplete="off">
            <input type="text" v-model="formData.username" placeholder="用户名">
            <!-- <div class="code">
              <input type="text" v-model="code" placeholder="验证码">
              <div class="canvas-code">
                <img src="@img/code.png"/>
              </div>
            </div> -->
            <input type="password" v-model="formData.password" placeholder="密码">
            <button type="button" @click="Submit">登陆</button>
        </form>
        <div class="connect">
            <router-link to="/register">注册</router-link>
            <router-link to="/password" class="right">找回密码</router-link>
        </div>
    </div>
</template>

<script>
import { userLogin } from '@/api'
export default{
  name:'login',
	data () {
		return{
      formData:{},
      code:'',
			popup:false
		}
  },
  methods:{
    async Submit () {
      let res=await userLogin(this.formData)
      if(res){
        this.$notify({
          type:'success',
          message:'登录成功',
          duration:500,
          onClose: ()=>{
            this.$router.push("/");
          }
        })
      }
      }
    }
}
</script>

<style lang="less" scoped>
  .page-container { 
      padding-top: 5.33rem;
      height: 100%;
      background: url(~@img/user/timg.jpg) no-repeat;
      background-size:100% 100%;
  }
  h1 {
      font-size: 1.33rem;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,.2);
      color: white;
      text-align: center;
  }
  form {
      position: relative;
      width: 81.33%;
      margin: .67rem auto 0 auto;
      text-align: center; 
  }
  input {
      width: 100%;
      height: 1.87rem;
      margin-top: 1.11rem;
      padding: 0 .67rem;
      background: rgba(45,45,45,.15);
      border-radius: .27rem;
      border: 1px solid rgba(255,255,255,.15);
      box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
      font-size: .62rem;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0,0,0,.1);
      transition: all .2s;
      &:-moz-placeholder { color: #fff; }
      &:-ms-input-placeholder { color: #fff; }
      &::-webkit-input-placeholder { color: #fff; }
      &:focus {
      outline: none;
      box-shadow:
          0 2px 3px 0 rgba(0,0,0,.1) inset,
          0 2px 7px 0 rgba(0,0,0,.2);
    }
  }

  button {
      width: 100%;
      height: 1.87rem;
      margin-top: 1.11rem;
      padding: 0;
      background: #ef4300;
      border-radius: .27rem;
      border: 1px solid #ff730e;
      box-shadow:
          0 .67rem 1.33rem 0 rgba(255,255,255,.25) inset,
          0 2px 7px 0 rgba(0,0,0,.2);
      font-size: .62rem;
      font-weight: 700;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0,0,0,.1);
      transition: all .2s;
  }
  .connect {
      width: 81.33%;
      margin: .44rem auto;
      font-weight: 500;
      display: flex;
      text-shadow: 0 1px 3px rgba(0,0,0,.2);
      a{
      display: inline-block;
      flex: 1;
      height: 1.56rem;
      color:white;
      text-decoration: none;
      transition: all .2s;
      text-align: left;
      font-size: .67rem;
      }
      .right{
          text-align: right;
      }
    }
  .code{
    display: flex;
  }
  .canvas-code{
    margin-top: 1.1rem;
  }
</style>