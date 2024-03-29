export interface ResponseData {
    code: string
    msg: string
}

export interface GuessULikeItem {
    desc: string | null
    id: string
    name: string
    orderNum: number
    picture: string
    price: string
}

export interface PageResult<T> extends ResponseData{
    counts: number
    items: T[]
    page: number
    pageSize: number
    pages: number
}

export type PageParams = {
    page?: number
    pageSize?: number
}

// 通用商品类型和猜你喜欢一样的
export interface GoodsItem {
    desc: string | null
    id: string
    name: string
    orderNum: number
    picture: string
    price: string
}