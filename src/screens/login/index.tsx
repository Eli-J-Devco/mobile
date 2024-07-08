import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets';
import LoginForm from '../../modules/auth/components/LoginForm';
import ForgotForm from '../../modules/auth/components/ForgotForm';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor={'transparent'}
      />
      <ImageBackground
        resizeMode="cover"
        source={images.bgLogin}
        style={styles.image}>
        <Text style={styles.lable}>
          {isLogin ? 'Log In' : 'Forgot Your Password'}
        </Text>
        {isLogin ? <LoginForm /> : <ForgotForm />}
        <Pressable
          style={styles.btnForgot}
          onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.forgotText}>
            {isLogin ? 'Forgot your password?' : 'Back to Login'}
          </Text>
        </Pressable>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  loginForm: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lable: {
    fontSize: 32,
    fontWeight: '600',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 32,
  },
  forgotText: {
    fontSize: 16,
    color: '#fff',
  },
  btnForgot: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
