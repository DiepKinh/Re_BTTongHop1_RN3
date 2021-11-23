import axios from 'axios';
import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {BackgroundView, Text} from '../../components';
import {mapIP} from '../../utils/common';
import GameItem from './components/GameItem';
import styles from './style';

export default class HomeScreen extends Component {
  state = {
    listGame: [],
    gameDetail: {},
    loading: true,
  };
  componentDidMount() {
    axios({method: 'GET', url: 'http://10.0.2.2:3000/games'})
      .then(result => {
        const listGame = mapIP(result.data);

        console.log(listGame);
        this.setState({listGame, loading: false});
      })
      .catch(err => {
        console.log(err);
        this.setState({loading: false});
      });
  }
  render() {
    const {loading, listGame} = this.state;
    return (
      <BackgroundView>
        {!loading && (
          <>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.headerText}>
                  Hello <Text style={styles.fontBold}>CyberSoft</Text>
                </Text>
                <Text>Best game for today</Text>
              </View>
              <View style={styles.avatar}></View>
            </View>
            <FlatList
              data={listGame}
              renderItem={({item}) => <GameItem gameItem={item} />}
              ItemSeparatorComponent={() => <View style={{height: 70}} />}
              contentContainerStyle={{paddingBottom: 100}}
            />
            {/* <GameItem gameItem={listGame} /> */}
          </>
        )}
      </BackgroundView>
    );
  }
}
