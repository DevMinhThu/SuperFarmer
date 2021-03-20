import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

export default class Service extends Component {
  render() {
    return (
      // View khung
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: '#dddddd',
          marginTop: 10,
          borderRadius: 5,
        }}>
        {/* View cho img */}
        <View style={{flex: 1}}>
          <Image
            source={require('../../Images/rau1.jpg')}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#dddddd',
            }}
          />
        </View>
        {/* View cho content */}
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            paddingLeft: 10,
          }}>
          <Text style={{fontSize: 14, color: '#b63838'}}>
            Rau cải ngồng - CN02
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>
            Thị trường: Vĩnh Phúc
          </Text>
          <Text style={{fontSize: 12}}>Giá: 10$</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
