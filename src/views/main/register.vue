<template>
  <div class="page-container">
    <h1>注册</h1>
    <form autocomplete="off">
      <input type="number"
             v-model="username"
             placeholder="手机号">
      <input type="password"
             v-model="password"
             placeholder="密码">
      <input type="password"
             v-model="psd"
             placeholder="确认密码">
      <button type="button"
              @click="Submit">注册</button>
    </form>
    <div class="connect">
      <router-link to="/login">已有账号，马上登陆</router-link>
    </div>
    <mt-popup v-model="popup"
              position="top"
              class="popup"
              :modal="false">注册成功</mt-popup>
  </div>
</template>

<script>
import { userRegister } from '@/api'
export default {
  name: 'register',
  data () {
    return {
      username: "",
      password: "",
      psd: "",
      popup: false
    }
  },
  methods: {
    Submit () {
      if (this.username == "")
      {
        this.$toast('请输入用户名');
        return false;
      }
      if (this.password == "")
      {
        this.$toast('请输入密码');
        return false;
      }
      if (this.psd != this.password)
      {
        this.$toast('两次密码输入不一致');
        return false;
      }
      const params = {
        username: this.username,
        password: this.password
      }
      userRegister(params).then(res => {
        let { message } = res.data;
        this.toast(message);
        // if(isMatch){
        // 	this.popup=true;
        // 	setTimeout(()=>{
        // 		this.popup=false;
        // 		this.$router.push("/login");
        // 	},1000) 
        // 	}else{
        // 		this.toast(message);
        // 		}
      });
    }
  }
}
</script>

<style scoped>
.page-container {
  padding-top: 5.33rem;
  height: 100%;
  background: url(~@img/my/timg.jpg) no-repeat;
  background-size: 100% 100%;
}
h1 {
  font-size: 1.33rem;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
}

form {
  position: relative;
  width: 81.33%;
  margin: 0.67rem auto 0 auto;
  text-align: center;
}

input {
  width: 13.33rem;
  height: 1.87rem;
  margin-top: 1.11rem;
  padding: 0 0.67rem;
  background: #2d2d2d; /* browsers that don't support rgba */
  background: rgba(45, 45, 45, 0.15);
  -moz-border-radius: 0.27rem;
  -webkit-border-radius: 0.27rem;
  border-radius: 0.27rem;
  border: 1px solid #3d3d3d; /* browsers that don't support rgba */
  border: 1px solid rgba(255, 255, 255, 0.15);
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  font-size: 0.62rem;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}

input:-moz-placeholder {
  color: #fff;
}
input:-ms-input-placeholder {
  color: #fff;
}
input::-webkit-input-placeholder {
  color: #fff;
}

input:focus {
  outline: none;
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
  width: 13.33rem;
  height: 1.87rem;
  margin-top: 1.11rem;
  padding: 0;
  background: #ef4300;
  -moz-border-radius: 0.27rem;
  -webkit-border-radius: 0.27rem;
  border-radius: 0.27rem;
  border: 1px solid #ff730e;
  -moz-box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 0.62rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}

button:hover {
  -moz-box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button:active {
  -moz-box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1) inset,
    0 1px 4px 0 rgba(0, 0, 0, 0.1);

  border: 0px solid #ef4300;
}
.connect {
  margin: 0.44rem auto;
  text-align: center;
}
.connect a {
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
}
.popup {
  width: 100%;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  color: white;
  font-size: 0.62rem;
  background: rgba(0, 0, 0, 0.3);
}
</style>