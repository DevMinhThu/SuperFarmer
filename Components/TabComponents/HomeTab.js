import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Icon, Content, Header, Left, Body, Right} from 'native-base';
import Category from '../Screens/Category';
import Service from '../Screens/Service';

const {height, width} = Dimensions.get('window');
export default class HomeTab extends Component {
  render() {
    return (
      <Content>
        {/* Header */}
        <Header style={styles.header}>
            <Left style={{flex: 1}}>
              <Icon name="ios-menu" style={styles.iconMenu} />
            </Left>
            <Body style={styles.titleApp}>
              <Text style={styles.textTitle}>SuperFarmer</Text>
            </Body>
            <Right style={{flex: 1}}>
              <Icon name="ios-send" style={styles.iconSend} />
            </Right>
          </Header>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.container}>
            {/* Các sản phẩm rau */}
            <Text style={styles.titleNews}>Rau Hữu Cơ Vĩnh Phúc</Text>
            <View style={{height: 250, marginTop: 20}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Category
                  imageUri={require('../../Images/rau1.jpg')}
                  name="Mẫu số 01: Hỗn hợp rau củ quả xanh tươi"
                />
                <Category
                  imageUri={require('../../Images/rau2.png')}
                  name="Mẫu số 02: Hỗn hợp các loại củ"
                />
                <Category
                  imageUri={require('../../Images/rau3.jpg')}
                  name="Mẫu số 03: Rau cải siêu ngọt"
                />
              </ScrollView>
            </View>
            {/* Biểu đồ các sản phẩm */}
            <View style={{paddingHorizontal: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                Biểu đồ biến động các mặt hàng trong năm qua
              </Text>
              <Text style={{fontWeight: '100', marginTop: 10}}>
                Thống kê trong tháng 12 vừa qua
              </Text>
              <View style={{width: width - 40, height: 200, marginTop: 20}}>
                <Image
                  source={require('../../Images/bd.png')}
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
            </View>
          </View>
          <View style={{marginTop: 40}}>
            <Text
              style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
              Các loại rau trên thị trường
            </Text>
            <View
              style={{
                paddingHorizontal: 20,
                marginTop: 20,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <Service width={width} />
              <Service width={width} />
              <Service width={width} />
            </View>
          </View>
        </ScrollView>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  titleNews: {
    fontSize: 23,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
  header: {backgroundColor: '#344955', height: 50},
  iconMenu: {paddingLeft: 10, color: '#fff', fontSize: 35},
  titleApp: {flex: 1.5, justifyContent: 'center', alignItems: 'center'},
  textTitle: {color: '#fff', fontSize: 20},
  iconSend: {paddingRight: 10, color: '#fff', fontSize: 35},
});
