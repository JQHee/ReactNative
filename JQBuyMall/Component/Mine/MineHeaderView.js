/**
 * Created by hjq on 2017/4/6.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Util from '../Main/Util';


var MineHeaderView = React.createClass({

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.5} style={styles.touchHeilightStyle}>
                    <Image source={{uri:'icon_tabbar_mine'}} style={styles.headerImageStyle}/>
                    <Text numberOfLines={1} style={styles.userNameStyle}>测试</Text>
                </TouchableOpacity>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor:"#2A6C6D",
        alignItems:'center',
        justifyContent:'center'
    },

    touchHeilightStyle: {
       alignItems:'center',
    },

    headerImageStyle: {
        width: 40,
        height:40,
        borderRadius: 20,
    },

    userNameStyle:{
        color:'white',
        fontSize: 15,
        marginTop: 8
    }

});

module.exports = MineHeaderView;