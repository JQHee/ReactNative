/**
 * Created by hjq on 2017/4/4.
 */

'use strict';
import React, { Component } from 'react';
var {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    PixelRatio
} = require('react-native');


// 导入通用的组件
import Util from '../../../Component/Main/Util';

export default class TextImageWidget extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this._renderRow();
    }

    _renderRow() {
        return (
            <View style={styles.rowContainer}>
                <View style={styles.row}>
                    {/*左边的标题*/}
                    <Text>
                        {this.props.title}
                    </Text>

                    {/*头像*/}
                    <View style={styles.headerViewStyle}>
                        <Image source={{uri: 'headerImage'}} style={styles.headerImageStyle}/>
                    </View>

                    {/*右边的arrow*/}
                    <View style={styles.arrowViewStyle}>
                        <Image source={{uri: 'image'}} style={styles.arrowImageStyle}/>
                    </View>

                </View>
            </View>
        );
    }
};

const  styles = StyleSheet.create({
    rowContainer: {
        backgroundColor:'rgba(2443,244,245,1.0)',
        width: Util.size.width
    },

    row: {
        height: 44,
        flexDirection: 'row',
        alignItems:'center',
        borderBottomWidth: 0.5 / PixelRatio.get(),
        borderColor: 'red'
    },

    headerViewStyle: {
        //backgroundColor:'red',
        flexDirection:'row',
        position:'absolute',
        height: 44,
        alignItems: 'center',
        width: 44,
        marginLeft: Util.size.width - 74,
        justifyContent:'center'
    },

    headerImageStyle: {
        width:38,
        height:38,
        borderWidth: 1 / Util.pixelRatio,
        backgroundColor: 'gray',
        borderRadius: 19

    },

    arrowViewStyle: {
        backgroundColor:'red'
    },

    arrowImageStyle: {

    }
});

// 输出组件
//module.exports = TextImageWidget;
//export default TextImageWidget;