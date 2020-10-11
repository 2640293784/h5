<template>
  <div class="page-container">
    <h1>注册</h1>
    <form autocomplete="off">
      <input type="number" v-model="username" placeholder="手机号">
      <div class="code">
        <input type="text" v-model="code" placeholder="验证码">
        <div class="canvas-code" v-code></div>
      </div>
      <input type="password" v-model="password" placeholder="密码">
      <input type="password" v-model="psd" placeholder="确认密码">
      <button type="button" @click="Submit">注册</button>
    </form>
    <div class="connect">
      <router-link to="/login">已有账号，马上登陆</router-link>
    </div>
  </div>
</template>

<script>
import { userRegister } from '@/api'
export default {
  name: 'register',
  data () {
    return {
      username: '',
      password: '',
      code: '',
      psd: ''
    }
  },
  methods: {
    async Submit () {
      if (this.username === '') {
        this.$toast('请输入用户名')
        return false
      }
      if (this.password === '') {
        this.$toast('请输入密码')
        return false
      }
      if (this.psd !== this.password) {
        this.$toast('两次密码输入不一致')
        return false
      }
      const params = {
        username: this.username,
        password: this.password
      }
      const res = await userRegister(params)
      if (res) {
        this.$notify({
          type: 'success',
          message: '注册成功',
          duration: 500,
          onClose: () => {
            this.$router.push('/login')
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
  width: 100%;
  height: 1.87rem;
  margin-top: 1.11rem;
  padding: 0 0.67rem;
  background: rgba(45, 45, 45, 0.15);
  border-radius: 0.27rem;
  border: 1px solid #3d3d3d; /* browsers that don't support rgba */
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  font-size: 0.62rem;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
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
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
  width: 100%;
  height: 1.87rem;
  margin-top: 1.11rem;
  padding: 0;
  background: #ef4300;
  border-radius: 0.27rem;
  border: 1px solid #ff730e;
  box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 0.62rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

button:hover {
  box-shadow: 0 0.67rem 1.33rem 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button:active {
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
.code{
    display: flex;
    input{
      flex: 1;
    }
  }
  .canvas-code{
    height: 2rem;
    flex:1;
    margin-top: 1.11rem;
  }
</style>
