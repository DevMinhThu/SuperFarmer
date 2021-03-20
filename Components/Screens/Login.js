import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Images from '../../Images/logo.png';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Slogan_Up_App */}
        <View style={styles.up}>
          <Image source={Images} style={styles.img} />
          <Text style={styles.title}>
            Super<Text style={{color: '#F9AA33'}}>Farmer</Text>
          </Text>
          <Text style={styles.slogan}>Vì Nông Dân Việt</Text>
        </View>
        {/* Down_App */}
        <View style={styles.down}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              textContentType="emailAddress"
              keyboardType="email-address"
              placeholder="Nhập địa chỉ email..."
              placeholderTextColor="#E0E0E0"></TextInput>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Nhập mật khẩu..."
              placeholderTextColor="#E0E0E0"
              secureTextEntry={true}></TextInput>
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.props.navigation.navigate('Main')}>
            <Text style={styles.loginButtonTitle}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>

          {/* Container Note */}
          <View style={styles.containerForgot}>
            <View style={styles.buttonForgotLeft}>
              <TouchableOpacity>
                <Text style={styles.titleFooter}>Không có tài khoản?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonForgotRight}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.titleFooter}>
                  <Text style={{color: '#F9AA33'}}> Tạo một tài khoản </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Version App */}
        <View style={styles.footerLogin}>
          <Text style={styles.titleFooter}>SuperFarmer - v1</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#344955',
  },
  up: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#344955',
    justifyContent: 'center',
    alignItems: 'center',
  },
  down: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#344955',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 35,
  },
  slogan: {
    color: 'white',
    textAlign: 'center',
    width: 400,
    fontSize: 15,
  },
  img: {
    width: 280,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9AA33',
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white',
  },
  footerLogin: {
    marginBottom: 10,
  },
  titleFooter: {
    color: 'white',
    marginTop: 20,
    fontSize: 14,
  },
  containerForgot: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonForgotLeft: {
    width: 150,
    height: 10,
  },
});
