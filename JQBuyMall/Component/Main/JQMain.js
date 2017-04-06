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
    Navigator,
    Platform, // 主要用来判断系统版本的
    Alert
} from 'react-native';

// 导入外部组件
import TabNavigator from 'react-native-tab-navigator';
import Util from './Util';


// 导入主要的组件
var Home = require('../Home/JQHome');
var More = require('../More/JQMore');
var Mine = require('../Mine/JQMine');
var Shop = require('../Shop/JQShop');



var JQMain = React.createClass({

    getInitialState() {
        return {
            selectedTab: 'home' // 默认选择第一个
        }
    },

    render() {
        return (
            <TabNavigator>
                {/*首页**/}
                {this.renderTabItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected','home','首页', Home,'')}
                {/*店铺**/}
                {this.renderTabItem('店铺', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected','shop','店铺', Shop, '20')}
                {/*我的**/}
                {this.renderTabItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected','mine','我的', Mine, '88')}
                {/*更多**/}
                {this.renderTabItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected','more','更多', More, '199')}
            </TabNavigator>
        );
    },

    // 每一个组件的item
    renderTabItem (title, iconName, selectedIconName, selectedTab, componentName, component, badgeText) {
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
                badgeText={badgeText}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                titleStyle={styles.titleStyle}
                renderBadge={() => this.customBadgeView(badgeText)}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{// 过渡动画
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>
        )
    },

    // 自定义BageView
    customBadgeView(badgeText) {
        return (
            badgeText ?
            <View style={styles.customBadgeViewStyle}>
                <Text
                    numberOfLines={1}
                    style={styles.customBadgeTextStyle}
                >
                    {badgeText}
                    </Text>
            </View>
                : null

        );
    }



});


const styles = StyleSheet.create({
    iconStyle: { // 如果图片不设置大小显示不了
        width: (Platform.OS === 'ios') ? 30 : 25,
        height: (Platform.OS === 'ios') ? 30 : 25,
    },

    titleStyle: { // tabbar默认的颜色
        color: 'black'
    },

    selectedTitleStyle: { // tabbar选中的颜色
        color: 'orange'
    },

    renderBadgeStyle: {
        backgroundColor: 'red'
    },

    customBadgeViewStyle: {
        marginTop: 5,
        width:21,
        height:21,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10.5,
        overflow: 'hidden'
    },

    customBadgeTextStyle: {
        color: 'white',
        fontSize: 12
    }

});

// 输出组件
module.exports = JQMain;
