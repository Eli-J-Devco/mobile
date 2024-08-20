/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {yupResolver} from '@hookform/resolvers/yup';
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
import {useNavigation} from '../../../hooks/useNavigation';

type LoginValuesFrom = {
  username: string;
  password: string;
};

const MIN_PASSWORD_LENGTH = 6;

const LoginForm = () => {
  const navigation = useNavigation();
  const theme = useThemeContext();
  const {loginFnc} = useAppContext();

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {
    username: __DEV__ ? 'quinguyen@gmail.com' : '',
    password: __DEV__ ? '@trongqui' : '',
  };

  const NewBlogSchema = Yup.object().shape({
    username: Yup.string()
      .email('Username must be a valid email.')
      .required('Please enter account.'),
    password: Yup.string()
      .min(MIN_PASSWORD_LENGTH, 'Password must be at least 6 characters.')
      .required('Please enter password.'),
  });

  const methods = useForm<LoginValuesFrom>({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {handleSubmit} = methods;

  const onSubmit = () => {
    setIsLoading(true);
    // console.log('---onSubmit---: ');
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
          inputMode="email"
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
