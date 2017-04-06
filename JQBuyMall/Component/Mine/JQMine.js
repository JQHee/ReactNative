/**
 * Created by hjq on 2017/4/3.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';


// 导入外部组件
import TextImageWidget from './Views/TextImageWidget';
import MineHeaderView from './MineHeaderView';
import MineCommonCell from './MineCommonCell';

var JQMine = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*头部视图*/}
                <MineHeaderView/>

                {/*列表视图*/}
                <ScrollView>
                    <MineCommonCell
                        title='元素贝'
                    />

                    <MineCommonCell
                        title='元素贝'
                    />

                    <MineCommonCell
                        title='元素贝'
                    />

                    <MineCommonCell
                        title='元素贝'
                    />

                    <MineCommonCell
                        title='元素贝'
                    />

                    <MineCommonCell
                        title='元素贝'
                    />

                    <MineCommonCell
                        title='元素贝'
                    />

                    <MineCommonCell
                        title='设置'
                    />

                    <MineCommonCell
                        title='退出'
                    />

                </ScrollView>

            </View>
        );
    }
});


const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

// 输出组件
module.exports = JQMine;
