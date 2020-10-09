<template>
<div>
  <van-address-list
    v-model="chosenAddressId"
    :list="list"
    default-tag-text="默认"
    @select="selectChenge"
    @add="onAdd"
    @edit="onEdit"
  >
  <template #item-bottom="{ id }">
    <van-icon @click.stop="onRemove(id)" name="cross" class="icon-close"/>
  </template>
  </van-address-list>
  <van-empty v-if="list.length===0" description="暂无收货地址" />
  <van-popup v-model="show" position="bottom" :style="{ height: '100%' }" closeable>
    <g-page-title title="新建地址" :isIcon="false"></g-page-title>
    <van-address-edit
      :area-list="areaList"
      show-postal
      :address-info="defaultDetails"
      show-set-default
      @change-area="onChangeArea"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </van-popup>
</div>
</template>
<script>
import areaList from '@assets/areaList'
import { getAddress, addAddress, deleteAddress, updateAdress, checkoutAdress } from '@/api'
export default {
  name: 'userAddress',
  data () {
    return {
      chosenAddressId: 0,
      defaultDetails: {},
      show: false,
      areaList,
      areaObj: [],
      list: []
    }
  },
  mounted () {
    this.getAddress()
  },
  methods: {
    // 获取收货地址
    async getAddress () {
      const res = await getAddress()
      if (res && res.data) {
        this.list = res.data.map(item => {
          item.checked && (this.chosenAddressId = item.id)
          // item.isDefault = item.checked
          item.address = `${item.province}${item.city}${item.county}${item.detail_locatoin}`
          item.postalCode = item.postal_code
          return item
        })
      }
    },
    // 新增弹窗
    onAdd () {
      this.defaultDetails = {}
      this.areaObj = []
      this.show = true
    },
    // 修改弹窗
    onEdit (item) {
      const { detail_locatoin, county_id, county, city, city_id, province, province_id } = item
      this.defaultDetails = {
        ...item,
        addressDetail: detail_locatoin,
        areaCode: county_id.toString()
      }
      this.areaObj = [
        { code: province_id, name: province },
        { code: city_id, name: city },
        { code: county_id, name: county }
      ]
      this.show = true
    },
    // 省市区change
    onChangeArea (obj) {
      this.areaObj = obj
    },
    // 保存
    async onSave (obj) {
      const [province, city, county] = this.areaObj
      const saveParams = {
        ...obj,
        province_id: province.code,
        city_id: city.code,
        county_id: county.code,
        detail_locatoin: obj.addressDetail
      }
      const res = await obj.id ? updateAdress(saveParams) : addAddress(saveParams)
      if (res) {
        this.$notify({
          type: 'success',
          message: `收货地址${obj.id ? '修改' : '添加'}成功`,
          duration: 500,
          onClose: () => {
            this.show = false
            this.getAddress()
          }
        })
      }
    },
    // 删除
    onRemove (id) {
      if (id === this.chosenAddressId) {
        this.$alert('已选为送货地址，不能删除')
        return false
      } else {
        this.$confirm('确认要删除该送货地址码？', async response => {
          if (response) {
            const res = await deleteAddress({ id })
            if (res) {
              this.$notify({
                type: 'success',
                message: '删除成功',
                duration: 500,
                onClose: () => {
                  this.getAddress()
                }
              })
            }
          }
        })
      }
    },
    selectChenge ({ id }) {
      checkoutAdress({ id })
    }
  }
}
</script>
<style lang="less" scoped>
  ::v-deep.van-address-item{
    position: relative;
  }
  .icon-close{
    position: absolute;
    top: .53rem;
    right: .53rem;
    font-size: .67rem;
    color: #c8c9cc;
  }
</style>
