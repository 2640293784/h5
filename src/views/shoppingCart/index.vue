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
export default {
  computed: {
    sum () {
      let total = 0
      this.list.forEach((value) => {
        if (value.checked)total += value.price * value.value
      })
      return total
    }
  },
  watch: {
    $route () {
      if (this.$route.name === 'Shopping') this.ajax()
    }
  },
  data () {
    return {
      choice_bool: false,
      loading: false,
      list: []
    }
  },
  mounted () {
    this.ajax()
  },
  methods: {
    ajax () {
      this.loading = true
      this.axios.post(shopping).then(res => {
        if (res.status === 200) {
          this.list = res.data
          this.loading = false
        }
      })
    },
    // 编辑
    edit () {
      this.choice_bool = true
    },
    // 数量添加
    add (index) {
      this.list[index].value++
    },
    // 数量减少
    minus (index) {
      if (this.list[index].value < 2) {
        this.list[index].value = 1
      } else {
        this.list[index].value--
      }
    },
    // 删除
    Delete (index) {
      const params = {
        id: this.list[index].id
      }
      this.axios.post(deleteShopping, params).then(res => {
        if (res.status === 200 && res.data === 1) this.list.splice(index, 1)
      })
    },
    // 选中购买
    Change (index) {
      this.list[index].checked ? this.list[index].checked = '' : this.list[index].checked = 'checked'
    },
    // 提交
    Submit () {
      if (localStorage.username) {
        // 没有购买判断
        if (this.sum === 0) {
          return false
        }
        const sub = new Promise()
        const id = this.list.filter(value => value.checked).map(value => value.id)
        const Value = this.list.filter(value => value.checked).map(value => value.value)
        const params = {
          id: id.join(','),
          value: Value.join(',')
        }
        sub.then(() => {
          this.axios.post(addShopping, params).then(res => {
            if (res.status === 200) {
              setTimeout(() => {
                this.$router.push('/purchase')
              }, 1500)
            }
          })
        })
      }
    }
  }
}
</script>
