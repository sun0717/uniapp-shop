<script setup lang="ts">
import type { BannerItem, CategoryItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const getHomeBanner = async () => {
  const res: any = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

// 获取前台分类数据
const getHomeCategoryData = async () => {
  const res: any = await getHomeCategoryAPI()
  console.log(res)
  categoryList.value = res.result
}
// 在页面里，相当于 onMounted()
onLoad(() => {
  getHomeBanner()
  getHomeCategoryData()
})
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />
  <!-- 轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CategoryPanel :list="categoryList"/>
  <view class="index">index</view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
