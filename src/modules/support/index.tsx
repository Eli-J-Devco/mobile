/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import MyScrollView from '../../common/base/MyScrollView';
import ButonText from '../../common/components/button/ButonText';
import ImagePicker from '../../common/components/input/ImagePicker';
import RHFInputLabel from '../../common/hook-form/RHFInputLabel';
import RHFSelect from '../../common/hook-form/RHFSelect';
import RHFTextAre from '../../common/hook-form/RHFTextAre';
import { useNavigation } from '../../hooks/useNavigation';

const Whys: Array<ISelectOption<string>> = [
  {
    label: 'Onsite support',
    value: '1',
  },
];

const Localtions: Array<ISelectOption<string>> = [
  {
    label: 'Viet Nam',
    value: '1',
  },
];

interface FormValue {
  why: string;
  localtion: string;
  contract?: string;
  account?: string;
  email: string;
  phone?: string;
}

const formValueDefault = {
  why: '',
  localtion: '',
  contract: '',
  account: '',
  email: '',
  phone: '',
};

const Support = () => {
  const navigation = useNavigation()

  const supportSchema = Yup.object().shape({
    why: Yup.string().required('Field is required.'),
    localtion: Yup.string().required('Field is requied.'),
    // contract: Yup.string(),
    // account: Yup.string(),
    email: Yup.string()
      .email('Username must be a valid email.')
      .required('Field is requied.'),
    // phone: Yup.string()
  });

  const methods = useForm<FormValue>({
    resolver: yupResolver(supportSchema),
    defaultValues: formValueDefault,
  });

  const {handleSubmit} = methods;

  const summit = () => {
    // console.log('---> data: ', data);
    navigation.goBack()
  };

  return (
    <MyScrollView>
      <FormProvider {...methods}>
        <View style={styles.container}>
          <RHFSelect name="why" label="How can we support ?" options={Whys} />
          <RHFSelect
            name="localtion"
            label="Project Location"
            options={Localtions}
          />
          <RHFInputLabel label="Contact Person" name="contract" />
          <RHFInputLabel label="Account Name" name="account" />
          <RHFInputLabel label="Phone Number" name="phone" />
          <RHFInputLabel label="Email Address" name="email" />
          <RHFTextAre label="Notes" name="notes" />
          <ImagePicker />
        </View>
      </FormProvider>
      <ButonText
        touchableOpacityStyles={styles.btn}
        textSize={20}
        text="Summit"
        onPress={handleSubmit(summit)}
      />
    </MyScrollView>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 16,
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
    marginBottom: 20
  },
});
