<template>
	<div class="g-title-wrap">
    <div class="g-title-left">
      <span class="sprite-icon"></span>
      <h2>{{title}}</h2>
    </div>
    <div class="g-title-right">
      <slot></slot>
    </div>
	</div>
</template>

<script>
	export default {
    name: 'g-title',
		props: {
			title: {
				type:String,
				default:''
			}
		},
		data(){
			return{}
		}
	}
</script>

<style lang="less">
.g-title-wrap{
	width: 100%;
	height: 2rem;
	color: #494949;
	background: white;
  display: flex;
  justify-content: space-between;
  .g-title-left{
    display: flex;
  }
  .g-title-right{
    position: relative;
    &::after{
content: '>';
    }
  }
  h2{
    line-height: 2rem;
    font-size: .76rem;
    font-weight: 200;
  }
.sprite-icon{
  width: .88rem;
  height: .67rem;
  margin:  .65rem 0 0 .5rem;
	line-height: .67rem;
	display:inline-block;
  background:url("~@assets/img/jd-sprites.png") no-repeat;
  background-position: -.18rem -6.49rem;
	background-size:8.89rem 8.89rem;
}
}
</style>