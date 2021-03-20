import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

export default class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: 200,
          width: 250,
          marginLeft: 20,
          resizeMode: 'cover',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: '#dddddd',
        }}>
        <View style={{flex: 2}}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
