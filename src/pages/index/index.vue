<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { getHomeBannerAPI } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBanner = async () => {
  const res: any = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

// 在页面里，相当于 onMounted()
onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />
  <!-- 轮播图 -->
  <XtxSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
