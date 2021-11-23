import React, {Component} from 'react';
import {Text as RNText, View} from 'react-native';
import {COLOR} from '../../themes/styles';

export default class Text extends Component {
  render() {
    const {color = COLOR.white, children, style} = this.props;
    return (
      <RNText {...this.props} style={[style, {color}]}>
        {children}
      </RNText>
    );
  }
}
