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
  View
} from 'react-native';


// 加载主要的组件
var Main = require('./Component/Main/JQMain');
import GuideView from './Component/Main/GuideView';
//var GuideView = require('./Component/Main/GuideView');

var JQBuyMall = React.createClass({
  render() {
    return (
        <Main/>
    );
  }
});


AppRegistry.registerComponent('JQBuyMall', () => JQBuyMall);
