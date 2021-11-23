import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLOR} from '../../themes/styles';

export default class BackgroundView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={COLOR.lightBack} />
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.lightBack,
  },
});
