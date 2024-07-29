/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import * as Yup from 'yup';
import MySpin from '../../../common/base/MySpin';
import MyTouchableOpacity from '../../../common/base/MyTouchableOpacity';
import {showNoti} from '../../../common/components/notify';
import RHFTextInput from '../../../common/hook-form/RHFTextInput';
import useAppContext from '../../../hooks/useAppContext';
import useThemeContext from '../../../hooks/useThemeContext';

type LoginValuesFrom = {
  username: string;
  password: string;
};

const LoginForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const theme = useThemeContext();
  const {loginFnc} = useAppContext();

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    username: __DEV__ ? 'dongnguyen' : '',
    password: __DEV__ ? 'lmsteam@' : '',
  };

  const NewBlogSchema = Yup.object().shape({
    username: Yup.string().required('Vui lòng nhập tài khoản'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  const methods = useForm<LoginValuesFrom>({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {handleSubmit} = methods;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log('---onSubmit---: ', data);
    loginFnc();
    navigation.replace('MainNavigation');
    showNoti('success', 'Login success !');
    setIsLoading(false);
  };

  const textButtonStyles: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '500',
  };

  return (
    <View style={styles.LoginFormForm}>
      <FormProvider {...methods}>
        <RHFTextInput
          type="text"
          name="username"
          // style={styles.input}
          placeholder="Email"
          placeholderTextColor={theme.palette.text.primary}
        />
        <RHFTextInput
          type="passwork"
          name="password"
          // style={styles.input}
          placeholder="PassWork"
          placeholderTextColor={theme.palette.text.primary}
        />
      </FormProvider>

      <MyTouchableOpacity
        touchableOpacityStyle={styles.btn}
        onPress={handleSubmit(onSubmit)}>
        {isLoading ? <MySpin /> : <Text style={textButtonStyles}>Log In</Text>}
      </MyTouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  LoginFormForm: {
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 48,
    width: '100%',
    borderRadius: 50,
    backgroundColor: '#FEDA00',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
});
