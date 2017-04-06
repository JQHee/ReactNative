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
    TouchableHighlight,
    ListView
} from 'react-native';

// 导入json数据
import imagesData from '../Main/imagesData.json';
// 导入外部组件
import Util from '../Main/Util';

var HomeBottomListView = React.createClass({

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
        //backgroundColor:'gray',
        flex: 1
    },

    rowStyle: {
        marginLeft: 15,
        width: Util.size.width,
        height: 50,
        marginBottom: 15,
        //justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth: 0.5 / Util.pixelRatio,
        borderColor:'gray',

    },

    rowImageStyle: {
        width: 40,
        height: 40,
        marginTop:8
    },

    rowTitleStyle: {
        fontSize: 15,
        marginLeft: 30,

    }
});

module.exports = HomeBottomListView;