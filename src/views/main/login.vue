<template>
	<div class="page-container">
        <h1>登陆</h1>
        <form autocomplete="off">
            <input type="number" v-model="formData.username" placeholder="用户名">
            <input type="password" v-model="formData.password" placeholder="密码">
            <button type="button" @click="Submit">登陆</button>
        </form>
        <div class="connect">
            <router-link to="/register">注册</router-link>
            <router-link to="/password" class="right">找回密码</router-link>
        </div>
        <mt-popup v-model="popup" position="top" class='popup' :modal="false">登陆成功</mt-popup>
    </div>
</template>

<script>
import { userLogin } from '@/api'
export default{
  name:'login',
	data () {
		return{
			formData:{},
			popup:false
		}
	},
	methods:{
		Submit(){
			userLogin(this.formData).then(res=>{
				const { isMatch,message, userId} = res.data;
				if(isMatch){
					this.popup=true;
					setTimeout(()=>{
					this.$cookie.set('userId', userId);
					this.popup=false;
				    this.$route.query.redirect?
					this.$router.push(this.$route.query.redirect):
					this.$router.push('/');
					},1000)	
				}else{
					this.toast(message);
				}
			})
		}
	}
}
</script>

<style scoped>
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
    -moz-border-radius: .27rem;
    -webkit-border-radius: .27rem;
    border-radius: .27rem;
    border: 1px solid rgba(255,255,255,.15);
    -moz-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.1) inset;
    font-size: .62rem;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
}

input:-moz-placeholder { color: #fff; }
input:-ms-input-placeholder { color: #fff; }
input::-webkit-input-placeholder { color: #fff; }

input:focus {
    outline: none;
    -moz-box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    -webkit-box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    box-shadow:
        0 2px 3px 0 rgba(0,0,0,.1) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
}

button {
    width: 100%;
    height: 1.87rem;
    margin-top: 1.11rem;
    padding: 0;
    background: #ef4300;
    -moz-border-radius: .27rem;
    -webkit-border-radius: .27rem;
    border-radius: .27rem;
    border: 1px solid #ff730e;
    -moz-box-shadow:
        0 .67rem 1.33rem 0 rgba(255,255,255,.25) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    -webkit-box-shadow:
        0 .67rem 1.33rem 0 rgba(255,255,255,.25) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    box-shadow:
        0 .67rem 1.33rem 0 rgba(255,255,255,.25) inset,
        0 2px 7px 0 rgba(0,0,0,.2);
    font-size: .62rem;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px 2px rgba(0,0,0,.1);
    -o-transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
}
.connect {
    width: 81.33%;
    margin: .44rem auto;
    font-weight: 500;
    text-shadow: 0 1px 3px rgba(0,0,0,.2);
}
.connect a{
    display: inline-block;
    width: 50%;
    float:left;
    height: 1.56rem;
    color:white;
    text-decoration: none;
    transition: all .2s;
    -moz-transition: all .2s;
    -webkit-transition: all .2s;
    -ms-transition: all .2s;
    text-align: left;
	font-size: .67rem;
}
.connect .right{
    text-align: right;
}
.popup{
	width: 100%;
	height: 2rem;
	text-align: center;
	line-height: 2rem;
	color: white;
	font-size: .62rem;
	background: rgba(0,0,0,.3);
}
</style>