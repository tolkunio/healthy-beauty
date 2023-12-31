'use client';
import React from 'react';
import {AdvertisingItemProps} from "@/mock/mockForAdvertisingBlock";
import './AdvertisingComponent.scss';

export const AdvertisingComponent = ({title, subTitle, imgUrl}: AdvertisingItemProps) => {
    return (
        <div className={'mainBlock'}>
            <div className={'bannerBlock'}>
                <img src={`/images-for-ads/banner.jpg`} alt={'Banner image'}/>
                <h1 className={'title'}>
                    <span className={'spanTitle'}>{title.slice(0,21)}</span>
                    <span className={'spanTitle'}>{title.slice(21, title.length)}</span>
                </h1>
                <span className={'spanSubTitle'}>{subTitle}</span>
                <button type={'button'} className={'button'}>Посмотреть</button>
            </div>
        </div>
    );
};
