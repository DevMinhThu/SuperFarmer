import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import Images from '../../Images/logo.png';

var {height, width} = Dimensions.get('window');
export default class Splash extends Component {
  state = {
    logoOpacity: new Animated.Value(0),
    titleMarginTop: new Animated.Value(height / 2),
  };

  async componentDidMount() {
    //Add animations here
    Animated.sequence([
      //Animations by sequence
      Animated.timing(this.state.logoOpacity, {
        toValue: 1,
        duration: 2000,
      }),
      //Animate text
      Animated.timing(this.state.titleMarginTop, {
        toValue: 10,
        duration: 1000,
      }),
    ]).start(() => {
      this.props.navigation.navigate('Login');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image
          source={Images}
          style={{...styles.img, opacity: this.state.logoOpacity}}
        />

        <Animated.Text
          style={{...styles.title, marginTop: this.state.titleMarginTop}}>
          Welcome SuperFarmer
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#344955',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  img: {
    width: 250,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
