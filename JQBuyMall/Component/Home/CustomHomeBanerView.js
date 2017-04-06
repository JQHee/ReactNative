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
    TouchableOpacity,
    Alert,
    TouchableHighlight
} from 'react-native';

var Swiper = require('react-native-swiper');


//参数的传递使用props
var Slider = React.createClass({

    _loadWeb:function(title,loadurl){
        alert(title + loadurl);
    },

    render: function(){
        var thiz = this;
        return (
            <Swiper style={Styles.wrapper}
                    showsButtons={false}
                    paginationStyle={{bottom:10}}
                    autoplayTimeout={3.0}
                    autoplay={true}
                    height={140}
                    showsPagination={true}
                    dot={this._indexView('gray')}
                    activeDot={this._indexView('red')}
            >
                {this.props.banners.map(function(banner){
                    return (
                        <TouchableHighlight key={banner} onPress={()=>thiz._loadWeb(banner,'')}>
                            <Image style={[Styles.slide,]} source={{uri: 'icon_tabbar_mine_selected'}}></Image>
                        </TouchableHighlight>
                    );
                })}
            </Swiper>
        );
    },

    _indexView(color){
        let view = <View style={[Styles.swiperIndexView, {backgroundColor:color}]}></View>;
        return view;
    }
});

const Styles = {

    swiperIndexView:{
        width:8,
        height:8,
        borderRadius:4,
        marginLeft:3,
        marginRight:3
    },

    //slider
    row:{
        flexDirection:'row',
    },
    wrapper: {
        height:125,
    },
    flex1:{
        flex:1,
    },
    center:{
        alignItems:'center',
        justifyContent: 'center',
    },
    slide: {
        height:125,
        resizeMode: Image.resizeMode.stretch,
    },
    adv: {
        height:145,
        resizeMode: Image.resizeMode.stretch,
    },
};

module.exports = Slider;