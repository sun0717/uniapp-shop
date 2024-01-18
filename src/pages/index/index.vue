<script setup lang="ts">
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { getHomeBannerAPI, getHomeCategoryAPI, getHotAPI } from '@/services/home'
import type { XtuGuessInstance } from '@/types/component'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
// 获取组件实例
const guessRef = ref<XtuGuessInstance>()
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

const getHotData = async () => {
  const res: any = await getHotAPI()
  console.log(res)
  hotList.value = res.result
}

const onScrolltolower = () => {
  console.log('滚动触底')
  guessRef.value?.getMore()
}
const isLoading = ref(false)
// 在页面里，相当于 onMounted()
onLoad(async () => {
  isLoading.value = true
  await Promise.all([
    getHomeBanner(),
    getHomeCategoryData(),
    getHotData()])
  isLoading.value = false
})
// 当前下拉刷新状态
const isTriggered = ref(false)

// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  isTriggered.value = true
  // await getHomeBanner()
  // await getHomeCategoryData()
  // await getHotData()
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData()
  await Promise.all([getHomeBanner(), getHomeCategoryData(), getHotData(), guessRef.value?.getMore()])
  // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />
  <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" @scrolltolower="onScrolltolower"
    :refresher-triggered="isTriggered" scroll-y>
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
