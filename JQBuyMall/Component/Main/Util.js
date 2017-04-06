/**
 * Created by hjq on 2017/4/4.
 */
'use strict';
import React from  'react';
// 获取屏幕分辨率
import  Dimensions from 'Dimensions';
// 获取屏幕的系统
import Platform from  'Platform';
// 返回的是像素密度
import PixelRatio from 'PixelRatio';
// 网络请求工具类
import HTTPUtil from '../Tools/HTTPUtil';

// 工具类获取屏幕的宽高
const Util = {
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    // 判断设备的系统是iOS
    isMobileOSOfIOS: Platform.OS === 'ios' ? true : false,
    // 返回的是像素密度
    pixelRatio: PixelRatio.get()
}

// 输出组件
export  default Util;