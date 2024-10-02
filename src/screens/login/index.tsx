import React, {useState} from 'react';
import {
  ImageBackground,
  // SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import {images} from '../../assets';
import MyTouchableOpacity from '../../common/base/MyTouchableOpacity';
import useThemeContext from '../../hooks/useThemeContext';
import ForgotForm from '../../modules/auth/components/ForgotForm';
import LoginForm from '../../modules/auth/components/LoginForm';

const Login = () => {
  const theme = useThemeContext();
  const [isLogin, setIsLogin] = useState(true);

  const textStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '400',
  };

  return (
    <>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <ImageBackground
        resizeMode="cover"
        source={images.bgLogin}
        style={styles.image}>
          {/* <SafeAreaView style={styles.container}> */}
        <Text style={styles.lable}>
          {isLogin ? 'Log In' : 'Forgot Your Password'}
        </Text>
        {isLogin ? <LoginForm /> : <ForgotForm />}
        <MyTouchableOpacity
          touchableOpacityStyle={styles.btnForgot}
          onPress={() => setIsLogin(!isLogin)}>
          <Text style={textStyle}>
            {isLogin ? 'Forgot your password?' : 'Back to Login'}
          </Text>
        </MyTouchableOpacity>
        {/* </SafeAreaView> */}
      </ImageBackground>
      </>
   
  );
};

export default Login;

const styles = StyleSheet.create({
  btnForgot: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  // container: {
  //   flex: 1,
  // },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  lable: {
    color: '#212121',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 32,
    textAlign: 'center',
  },
});
