/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import * as Yup from 'yup';
import MyTouchableOpacity from '../../../common/base/MyTouchableOpacity';
import RHFTextInput from '../../../common/hook-form/RHFTextInput';
import useThemeContext from '../../../hooks/useThemeContext';
import {showNoti} from '../../../common/components/notify';

type LoginValuesFrom = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const theme = useThemeContext();

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

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: {isSubmitting, isValid},
  } = methods;

  const onSubmit = async (data: any) => {
    console.log('---onSubmit---: ', data);
    showNoti('success', 'Login success !');
    navigation.replace('MainNavigation', {});
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
        <Text
          style={{
            color: theme.palette.text.primary,
            fontSize: theme.font.size.sm,
            fontWeight: '500',
          }}>
          Log In
        </Text>
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
  lable: {
    fontSize: 32,
    fontWeight: '600',
    color: '#212121',
    textAlign: 'center',
    marginBottom: 32,
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
  btnText: {
    color: '#212121',
    fontSize: 24,
    fontWeight: '700',
  },
});
