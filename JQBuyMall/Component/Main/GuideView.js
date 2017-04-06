/**
 * Created by hjq on 2017/4/4.
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

// 导入工具类
import Util from './Util';

// 导入图片资源
let image1 = require('../../Images/launchimage.png');
let image2 = require('../../Images/launchimage.png');
let image3 = require('../../Images/launchimage.png');

var GuideView = React.createClass({
    render() {
        return(
            this.renderScrollView()
        );
    },

    renderScrollView () {
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}>
                <Image source={image1} style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <Image source={image3} style={styles.backgroundImage} />
            </ScrollView>
        );
    }
});

var styles = StyleSheet.create({
    contentContainer: {
        width: Util.size.width * 3,
        height: Util.size.height,
    },
    backgroundImage: {
        width: Util.size.width,
        height: Util.size.height,
    },
});

export  default GuideView;