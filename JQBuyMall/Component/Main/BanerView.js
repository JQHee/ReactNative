/**
 * Created by hjq on 2017/4/5.
 */
'use strict';
import React, { Component } from 'react';
var {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView
} = require('react-native');

// 导入外部组件
import Util from './Util';


// 以下的这种写法相对
/*
var BanerView = React.createClass({

});
// 输出组件
module.exports = BanerView;
export default BanerView;
*/

export default class BanerView extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            duration: 2500   //每隔一秒开始轮播
        };
    }

    render() {
        return(
            this._renderScrollView()
        );
    }

    /**
     * 一般在此方法中处理一些耗时操作
     */
    componentDidMount() {
        this._startTimer();

    }

    _renderScrollView() {
        return (
            <View style={styles.container}>

                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(scrollView)=>this.onAnimationEnd(scrollView)}
                    onScrollBeginDrag={this.onScrollBeginDrag.bind(this)}
                    onScrollEndDrag={this.onScrollEndDrag.bind(this)}
                >
                    {this._renderAllImage()}
                </ScrollView>

                <View style={styles.circleContainer}>
                    {this._renderCircleIndicator()}
                </View>
            </View>
        );
    }


    /**
     * 演染图片
     * @returns {Array}
     * @private
     */
    _renderAllImage() {
        var imgArr = [];
        var imgData = this.props.imgData;
        for (var i in imgData) {
            imgArr.push(
                <Image
                    key={i}
                    source={{uri: imgData[i].icon}}
                    style={{width: Util.size.width, height: 140}}
                />
            )
        }
        return imgArr;
    }

    /**
     * 渲染圆点指示器
     * @private
     */
    _renderCircleIndicator() {

        var circleArr = [];
        var imgData = this.props.imgData;
        var style;
        for (var i in imgData) {
            style = i == this.state.currentPage ? {color: 'orange'} : {color: 'white'};
            circleArr.push(
                <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
            );
        }

        return circleArr;
    }

    /**
     * 当一页滑动结束时调用
     * @param scrollView
     */
    onAnimationEnd(scrollView) {

        // 计算一页滑动的偏移量
        var offSetX = scrollView.nativeEvent.contentOffset.x;
        console.log(offSetX);
        // 算出当前为第几页
        var currentPage = Math.floor((offSetX / Util.size.width));
        this.setState({
            currentPage: currentPage
        });
    }

    /**
     * 开始拖拽时的回调
     * @private
     */
    onScrollBeginDrag() {
        clearInterval(this.interval);
    }

    /**
     * 拖拽停止时的回调
     * @private
     */
    onScrollEndDrag() {
        this._startTimer();
    }

    /**
     * 开启定时器
     * @private
     */
    _startTimer() {

        var scrollView = this.refs.scrollView;
        var imgCount = this.props.imgData.length;

        this.interval = setInterval(() => {

            //记录当前正在活动的图片
            var activePage = 0;
            if ((this.state.currentPage + 1) >= imgCount) { //防止越界
                activePage = 0;
            } else {
                activePage = this.state.currentPage + 1;
            }

            this.setState({
                currentPage: activePage
            });

            //让ScrollView动起来
            var offSetX = activePage * Util.size.width;
            scrollView.scrollResponderScrollTo({x: offSetX, y: 0, animated: true});

        }, this.state.duration);
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: Util.isMobileOSOfIOS ? 25 : 0
    },

    circleContainer: {
        width: Util.size.width,
        height: 25,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.4)',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
