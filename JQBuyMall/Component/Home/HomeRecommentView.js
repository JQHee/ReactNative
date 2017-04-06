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
    ListView,
    TouchableOpacity
} from 'react-native';

// 导入json数据
import imagesData from '../Main/imagesData.json';

// 导入外部组件
import Util from '../Main/Util';

var  HomeRecommentView = React.createClass({
    getInitialState() {
        // 创建数据源
        var ds = new  ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
        return {
            dataSource:ds.cloneWithRows(imagesData.data)
        };
    },

    render() {
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    contentContainerStyle={styles.listViewStyle}
                    bounces={false}
                />
            </View>

        );
    },

    _renderRow(rowData,cellID,sectionID) {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => this._rowOnPress(rowData)}>
                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.rowImageStyle}/>
                    <Text style={styles.rowTitleStyle} numberOfLines={1}>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    },

    _rowOnPress(rowData) {
        alert(rowData.title);
    }

});


const styles = StyleSheet.create({

    container: {
        height: 170,
        //backgroundColor: 'red',
    },


    listViewStyle: {
        flexDirection:'row',
        flexWrap:'wrap',
        // 侧轴
        alignItems:'center'// 必须设置,否则换行不起作用
    },

    rowStyle: {
        marginLeft: 15,
        width: (Util.size.width - 15) / 5,
        height: (Util.size.width - 15) / 5,
        marginBottom: 15,
        alignItems: 'center',

    },

    rowImageStyle: {
        width: 35,
        height: 35,
        marginTop:8
    },

    rowTitleStyle: {
        fontSize: 11

    }

});

module.exports = HomeRecommentView;