export interface AdvertisingItemProps {
    id: number,
    title: string,
    subTitle: string,
    imgUrl: string
}

export const mockAds: AdvertisingItemProps[] = [
        {
            id: Math.random(),
            title: 'Визажисты рекомендует',
            subTitle: 'для вашей красоты',
            imgUrl:"/images-for-ads/banner.jpg"
        },
    {
        id: Math.random(),
        title: 'items for your  makeup',
        subTitle: 'the best ',
        imgUrl:"/images-for-ads/banner.jpg"
    },
    {
        id: Math.random(),
        title: 'invert for yourself',
        subTitle: 'to become more prettier',
        imgUrl:"/images-for-ads/banner.jpg"
    },
    {
        id: Math.random(),
        title: 'items for your  makeup',
        subTitle: 'the best ',
        imgUrl:"/images-for-ads/banner.jpg"
    },
    {
        id: Math.random(),
        title: 'invert for yourself',
        subTitle: 'to become more prettier',
        imgUrl:"/images-for-ads/banner.jpg"
    },
]