<template>
<!-- tabbar -->
    <mt-tabbar class="footer" fixed>
			<router-link to="/" :class="{ 'active':selected==1}" class="footer-color mt-tab-item">
				<font class="iconfont">&#xe612;</font>
				<span class="inco_txt">首页</span>
			</router-link>
			<router-link to="/classify" :class="{'active':selected==2}" class="footer-color mt-tab-item">
				<font class="iconfont">&#xe660;</font>
				<span class="inco_txt">分类</span>
			</router-link>
			<router-link to="/shopping" :class="{'active':selected==3}" class="footer-color mt-tab-item">
				<font class="iconfont">&#xe63e;</font>
				<span class="inco_txt">购物车</span>
			</router-link>
			<router-link to="/my" :class="{'active':selected==4}" class="footer-color mt-tab-item">
				<font class="iconfont">&#xe62e;</font>
				<span class="inco_txt">我的</span>
			</router-link>
    </mt-tabbar>
<!--tabbar-->
</template>
<script>
	export default{
		name:'FooterNav',
		props:{
			selected:{
				type:String,
				default:'1'
			}
		},
		data(){
			return{}
		}
	}
</script>
<style>
.footer{
		  box-shadow: 0 -0.13rem 0.22rem #ccc;
  -webkit-box-shadow: 0 -0.13rem 0.22rem #ccc;
	 -moz-box-shadow: 0 -0.13rem 0.22rem #ccc;
	 height: 2rem;
	 max-width: 640px;
	 margin: auto;
}
.inco_txt{
	    display: block;
		  line-height: .6rem;
		    }
.footer-color{
	color: #494949;
	padding-top: .3rem;
}
.footer-color .inco_txt,.footer-color .iconfont{
	font-size: .62rem;
}
.active{
	color: #26a2ff;
}
.footer-color .iconfont{
	display: inline-block;
	margin-bottom: .15rem;
}
</style>