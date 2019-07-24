import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import URL from 'url-parse';
import qs from 'querystringify';

import './index.css'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () {
    qs.parse('?foo=bar');
    new URL('https://github.com/foo/bar');
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
 