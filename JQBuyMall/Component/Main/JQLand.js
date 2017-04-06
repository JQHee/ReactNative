/**
 * Created by hjq on 2017/4/3.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


// 引入外部组件
var Main = require('./JQMain');

var JQLand = React.createClass({
    render() {
        return (
            <Image source={{uri: 'launchimage'}} style={styles.launchImageStyle}/>
        );
    },

    // 主要处理复杂的操作，定时、异步请求等
    componentDidMount() {
        // 延时操作
        setTimeout(() => {
            this.props.navigator.replace({
                component: Main, // 具体切换的路由板块
        });

        },1500)
    }
});


const styles = StyleSheet.create({
    launchImageStyle: {
        flex: 1
    }
});

// 输出组件
module.exports = JQLand;