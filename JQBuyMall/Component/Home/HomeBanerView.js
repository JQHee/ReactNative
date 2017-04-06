/**
 * Created by hjq on 2017/4/5.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    TouchableHighlight
} from 'react-native';

// 导入外部组件
import Util from '../Main/Util';
import Swiper from 'react-native-swiper';

export  default class HomeBanerView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this._renderSwiperView()
        );
    }

    // 处理点击事件
    _onTouchEnd(e, state, context) {
        alert(state.index)
    }

    _renderSwiperView () {


        return (
            <Swiper height={140}
                    paginationStyle={{bottom:10}}
                    autoplay={true}
                    dot={this._indexView('white')}
                    activeDot={this._indexView('red')}
                    autoplayTimeout={3.0}
                    //onTouchEnd={this._onTouchEnd}
            >
                {this._scrollImgs()}
            </Swiper>
        );
    }



    _scrollImgs(){
        var imageViews=[];
        var images=[
            'icon_tabbar_mine_selected',
            'icon_tabbar_mine_selected',
            'icon_tabbar_mine_selected',
            'icon_tabbar_mine_selected',
            'icon_tabbar_mine_selected',
            'icon_tabbar_mine_selected'
        ];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1}}
                    source={{uri:images[i]}}
                />
            );
        }
        return imageViews;
    }

    _indexView(color){
        let view = <View style={[styles.swiperIndexView, {backgroundColor:color}]}></View>;
        return view;
    }



};

const  styles = StyleSheet.create({
    swiperIndexView:{
        width:8,
        height:8,
        borderRadius:4,
        marginLeft:3,
        marginRight:3
    },

});