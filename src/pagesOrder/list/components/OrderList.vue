<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getMemberOrderAPI } from '@/services/order'
import { orderStateList, OrderState } from '@/services/constant'
import { getPayMockAPI } from '@/services/pay'
import type { OrderItem } from '@/types/order'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 定义 props
const props = defineProps<{
    orderState: number
}>()

// 请求参数
const queryParams: OrderListParams = {
    page: 1,
    pageSize: 5,
    orderState: props.orderState,
}

// 订单支付
const onOrderPay = async (id: string) => {
    if (import.meta.env.DEV) {
        // 开发环境模拟支付
        await getPayMockAPI({ orderId: id })
    } else {
        // 正式环境微信支付
        const res = await getPayWxPayMiniPayAPI({ orderId: id })
        wx.requestPayment(res.result)
    }
    // 成功提示
    uni.showToast({ title: '支付成功' })
    // 更新订单状态
    const order = orderList.value.find(v => v.id === id)
    order!.orderState = OrderState.DaiFaHuo
    // 关闭当前页, 再跳转支付结果页
    uni.redirectTo({ url: `/pagesOrder/payment/payment?id=${id}` })
}

// 获取订单列表
const orderList = ref<OrderItem[]>([])
const getMemberOrderData = async () => {
    const res = await getMemberOrderAPI(queryParams)
    orderList.value = res.result.items
}


onMounted(() => {
    getMemberOrderData()
})
</script>
<template>
    <!-- 订单列表 -->
    <scroll-view scroll-y class="orders">
        <view class="card" v-for="order in orderList" :key="order.id">
            <!-- 订单信息 -->
            <view class="status">
                <text class="date">{{ order.createTime }}</text>
                <!-- 订单状态文字 -->
                <text>{{ orderStateList[order.orderState].text }}</text>
                <!-- 待评价/已完成/已取消 状态: 展示删除订单 -->
                <text v-if="order.orderState >= OrderState.DaiPingJia" class="icon-delete"></text>
            </view>
            <!-- 商品信息，点击商品跳转到订单详情，不是商品详情 -->
            <navigator v-for="item in order.skus" :key="item.id" class="goods"
                :url="`/pagesOrder/detail/detail?id=${order.id}`" hover-class="none">
                <view class="cover">
                    <image mode="aspectFit" :src="item.image">
                    </image>
                </view>
                <view class="meta">
                    <view class="name ellipsis">{{ item.name }}</view>
                    <view class="type">{{ item.attrsText }}</view>
                </view>
            </navigator>
            <!-- 支付信息 -->
            <view class="payment">
                <text class="quantity">共{{ order.totalNum }}件商品</text>
                <text>实付</text>
                <text class="amount"> <text class="symbol">¥</text>{{ order.payMoney }}</text>
            </view>
            <!-- 订单操作按钮 -->
            <view class="action">
                <!-- 待付款状态：显示去支付按钮 -->
                <template v-if="order.orderState === OrderState.DaiFuKuan">
                    <view class="button primary" @tap="onOrderPay(order.id)">去支付</view>
                </template>
                <template v-else>
                    <navigator class="button secondary" :url="`/pagesOrder/create/create?orderId=id`" hover-class="none">
                        再次购买
                    </navigator>
                    <!-- 待收货状态: 展示确认收货 -->
                    <view v-if="order.orderState === OrderState.DaiShouHuo" class="button primary">确认收货</view>
                </template>
            </view>
        </view>
        <!-- 底部提示文字 -->
        <view class="loading-text" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
            {{ true ? '没有更多数据~' : '正在加载...' }}
        </view>
    </scroll-view>
</template>
