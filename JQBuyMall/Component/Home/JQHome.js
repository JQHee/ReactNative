import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

// 引入轮播组件
import BanerView from '../Main/BanerView';
var imagesData = require('../Main/imagesData.json');
import HomeBanerView from './HomeBanerView';
import HomeRecommentView from './HomeRecommentView';
import CustomeHomeBanerView from './CustomHomeBanerView';
import HomeBottomListView from './HomeBottomListView';
import Util from '../Main/Util';

var JQHome = React.createClass({

    getInitialState() {
        return{
            banners:imagesData.data
        };
    },

    render() {
        return (
            <View style={styles.container}>
                {/*顶部导航栏栏*/}
                {this._renderNavBar()}

                <ScrollView>
                    {/*广告轮播图*/}
                    <CustomeHomeBanerView
                        banners={this.state.banners}
                        navigator={this.props.navigator}
                    />

                    {/*推荐位*/}
                    {this._renderRecommentView()}

                    {/*底部列表*/}
                    {this._renderBottomListView()}

                </ScrollView>


            </View>

        );
    },

    _renderNavBar() {
        return(
            <View style={styles.navBarView}></View>
        );
    },

    _renderRecommentView() {
        return (
            <HomeRecommentView style={styles.homeRecommentViewStyle}/>
        );
    },

    _renderBottomListView() {
        return(
            <HomeBottomListView/>
        );
    }

});


const styles = StyleSheet.create({

    customBadgeViewStyle: {
        marginTop: 64,
    },

    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    navBarView: {
        height:64,
        width: Util.size.width,
        backgroundColor: 'orange',
    },

    homeRecommentViewStyle: {
        //height:200,
        //backgroundColor:'red'
    }

});

module.exports = JQHome;