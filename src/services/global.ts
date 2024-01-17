import type { PageResult, GuessULikeItem, PageParams } from '@/types/global'

import { http } from '@/utils/http'
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
    return http<PageResult<GuessULikeItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data,
    })
}