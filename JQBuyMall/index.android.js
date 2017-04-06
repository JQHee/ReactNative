/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

// 引入外部的组件
var Launch= require('./Component/Main/JQLand');

var JQBuyMall = React.createClass({
   render() {
     return(
         <Navigator
             initialRoute={{name:'启动页',component:Launch}}
             configureScene={()=>{// 过渡动画
               return Navigator.SceneConfigs.PushFromRight;
             }}
             renderScene={(route,navigator)=>{
               let Component = route.component;
               return <Component {...route.passProps} navigator={navigator}/>;
             }}
         />
     )
   }

});

AppRegistry.registerComponent('JQBuyMall', () => JQBuyMall);
