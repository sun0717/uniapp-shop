import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'
/**
 * 首页-广告区域-小程序
 * @param distributionSite 
 * @returns 
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite
        }
    })
}

export const getHomeCategoryAPI = () => {
    return http<CategoryItem>({
      method: 'GET',
      url: '/home/category/mutli',
    })
}