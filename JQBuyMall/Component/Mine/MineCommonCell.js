/**
 * Created by hjq on 2017/4/6.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入外部组价
import Util from '../Main/Util';

var MineCommonCell = React.createClass({


    render() {
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image source={{uri:'icon_tabbar_mine'}} style={styles.leftIconStyle}/>
                    <Text numberOfLines={1} style={styles.titleStyle}>{this.props.title}</Text>
                    <Image source={{uri:'icon_tabbar_mine'}} style={styles.arrowIconStyle}/>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({

    rowStyle:{
        height: 44,
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: 0.5,
        borderColor:'gray'
    },

    leftIconStyle: {
        width: 30,
        height:30,

    },

    titleStyle: {
        marginLeft: 15,
        fontSize: 13,
        color:'#484848'
    },

    arrowIconStyle: {
        width: 15,
        height:15,
        position:'absolute',
        right: 15
    }


});

module.exports = MineCommonCell;