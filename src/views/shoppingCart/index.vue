<template>
	<div>
		<!--title-->
		<div class="s_title">
			<h2>购物车<a href="javascript:;" @click="edit">编辑</a></h2>
		</div>
		<mt-spinner color="#26a2ff" v-if="loading" type="snake" class="loading"></mt-spinner>
		<div id="shopping" v-else>
			<!--商品-->
			<div v-if="list.length>0">
				<div class="supplier clearfix" :key="index" v-for="(item,index) in list">
					<h2>供货商:{{item.supplier}}<span @click="Delete(index)" class="sprite-icon"></span></h2>
					<dl class="clearfix">
						<p class="shop_noly fl" v-if="choice_bool">
							<span>
								<input type="checkbox" @change="Change(index)" :checked="item.checked" :id="'check'+index">
								<label :for="'check'+index"></label>
							</span>
						</p>
						<dt>
							<img :src="item.url" />
						</dt>
						<dd class="supp_con">
							<span class="supp_c_txt">{{item.synopsis}}</span>
							<span class="supp_c_money">规格：{{item.cubage}}</span>
							<div class="supp_c_price clearfix">
								<span class="supp_box">{{item.price*item.value}}积分</span>
								<p class="supp_c_inpt">
									<input type="button" value="-" class="plus fl" @click="minus(index)"/>
									<input type="text" v-model="item.value" class="txt fl">
									<input type="button" value="+" class="reduce fl" @click="add(index)"/>
								</p>
							</div>
						</dd>
					</dl>
				</div>
			</div>
			<!--没有商品时显示-->
			<div class="none" v-else>
				<img src="@img/shopingcart_03.png"/>
				<p>购物车空空如也</p>
			</div>
		</div>
		<div class="con_sub cart_che">
			<span class="con_color cart_main fl">
				合计:<font>{{sum}}积分</font>
				<font class="cart_money">(不包含运费)</font>
			</span>
      <van-button type="danger">确认提交</van-button>
			<!-- <button type="button" class="con_ti fr" @click="Submit">确认提交</button> -->
		</div>
    <g-footer-nav :active="2"></g-footer-nav>
	</div>
</template>

<script>
	import { shopping, addShopping, deleteShopping } from '@/api'
	export default{
		computed:{
			sum(){
			let total=0;
			this.list.forEach((value)=>{
				if (value.checked)total+=value.price*value.value;
			})
			return total;
			}
		},
		watch:{
			$route(){
			  if(this.$route.name=='Shopping')this.ajax();
			}
		},
		data(){
			return{
				choice_bool:false,
				loading:false,
				list:[]
			}
		},
		mounted(){
      this.ajax();
		},
		methods:{
			ajax(){
				this.loading=true;
				this.axios.post(shopping).then(res=>{
					if (res.status==200){
						this.list=res.data;
						this.loading=false;
					}
				})
			},
			//编辑
			edit(){
				this.choice_bool=true;
			},
			//数量添加
			add(index){
				this.list[index].value++;
			},
			//数量减少
			minus(index){
				if (this.list[index].value<2) {
					this.list[index].value=1;
					Toast('最小数量为1');
				}else{
					this.list[index].value--;
				}
			},
			//删除
			Delete(index){
				const params={
					id:this.list[index].id
				}
				this.axios.post(deleteShopping,params).then(res=>{
					if(res.status==200&&res.data==1)this.list.splice(index,1);
				})	
			},
			//选中购买
			Change(index){
				this.list[index].checked?this.list[index].checked='':this.list[index].checked='checked';
			},
			//提交
			Submit(){
				if (localStorage.username){
					//没有购买判断
					if(this.sum==0){
						Toast('没有要提交的商品');
						return false;
					}
					let sub=MessageBox.confirm('共'+this.sum+'积分','确认支付');
					let id=this.list.filter(value=>value.checked).map(value=>value.id);
					let Value=this.list.filter(value=>value.checked).map(value=>value.value);
					let params={
						id:id.join(','),
						value:Value.join(',')
					};
					sub.then(()=>{
						this.axios.post(addShopping,params).then(res=>{
							if(res.status==200){
								Toast({
									message:'提交成功',
									duration:1000
									});
								setTimeout(()=>{
									this.$router.push('/purchase');
								},1500)
							}	
						})
							});
					}	
			}
		}
	}
</script>

<style lang="less" scoped>
.s_title{
	width: 100%;
	height: 1.78rem;
	line-height: 1.78rem;
	text-align: center;
	background: #fff;
	border-bottom: 1px solid #ededed;
}
.s_title h2{
	width: 100%;
	float: left;
	font-size: 0.9rem;
}
.s_title a{
	margin-right: .22rem;
	font-size: 0.7rem;
	color: #ed3341;
	float: right;
	width: auto;
	
}
/*supplier start*/
#shopping{
	margin-bottom: 4rem;
}
.supplier{
	width: 100%;
	background: #fbfbfb;
	border-top: .44rem solid #F2F2F2;
}
#shopping h2{
	height: 2rem;
	line-height: 2rem;
	font-size: 0.7rem;
	padding: 0 .44rem;
}
#shopping h2 span{
	width: .71rem;
	height: .89rem;
	margin-top: .53rem;
	background-position: -6rem -5.69rem;
	float: right;
}
#shopping dl{
	width: 100%;
	background: #fff;
	position: relative;
}
#shopping dt{
	width: 35.5%;
	padding: .67rem;
	float: left;
	margin-left: .67rem;
}
#shopping dt img{
	height: 100%;
}
.supp_con{
	width: 60%;
	float: right;
	margin-top: .44rem;
	padding-right: .44rem;
}
.supp_c_txt{
	height: 1.96rem;
	line-height: 1rem;
	font-size: 0.6rem;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	line-clamp: 2;
	box-orient: vertical;
}
.supp_c_money{
	display: block;
	line-height: 1.36rem;
	font-size: 0.5rem;
}
.supp_c_price{
	width: 100%;
}
.supp_box,.supp_box number{
	color: #ed3341;
	font-size: .71rem;
}
.supp_c_inpt
{
	width: 40%;
	float: right;
	border: .04rem solid #c3c3c3;
	border-radius: .08rem;
}
.plus{
	width: 25%;
	height: .97rem;
	border-right: 1px solid #c3c3c3;
	background: #fff;
}
.txt{
	width: 50%;
	height: .97rem;
	text-align: center;
}
.reduce{
	width: 25%;
	height: .97rem;
	border-left: .04rem solid #c3c3c3;
	background: #fff;
}
/*supplier end*/
.cart_che{
	bottom: 2rem;
	left:0;
	position: fixed;
	height: 2rem;
	width: 100%;
	padding: 0 .5rem;
  background: white;
  display: flex;
  justify-content: space-between;
}
.cart_main{
	height: 50%;
	line-height: 1.32rem;
	position: relative;
}
.cart_main font{
	display: inline-block;
}
.cart_main .cart_money{
	position: absolute;
	left: 0;
	top: .8rem;
}
.con_color{
	display: block;
}
.con_sub .all_style{
	color: #ED0012;
}
.shop_noly span{
	display: block;
	width: .47rem;
	height: .47rem;
	border-radius: 50%;
	position: absolute;
	top: 0px;
	left: .2rem;
	bottom: 0px;
	margin: auto;
}
.shop_noly input{
		position: absolute;
		top: 0;
		left: .04rem;
		bottom: 0;
		margin: auto;
		visibility: hidden;
		}
.shop_noly label{
			display: inline-block;
			width: .72rem;
			height: .72rem;
			border: .04rem solid #868893;
			border-radius: 50%;
			vertical-align: middle;
				}
.shop_noly input:checked+label:after{
									content: "";
                  position: absolute;left: 3px;
                  bottom: 0.1rem;
									width: .53rem;height: .27rem;
									border: .08rem solid #6b708b;
									border-top-color: transparent;
									border-right-color: transparent;
									transform: rotate(-45deg);
									} 
input.movemain{
				top: 1.11rem;
				left: .62rem;
			}
.none img{
	width: 60%;
	margin: 1.28rem auto;
}
.none p{
	text-align: center;
	font-size: .85rem;
	color: #999;
}
.loading{
	display: flex;
	justify-content: center;
	padding: .44rem 0;
}
</style>