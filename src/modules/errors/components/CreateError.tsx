import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import Buton from '../../../common/components/button/Button';
import PrimaryModal from '../../../common/components/modal/PrimaryModal';
import RHFInputLabel from '../../../common/hook-form/RHFInputLabel';
import RHFSelect from '../../../common/hook-form/RHFSelect';
import RHFTextAre from '../../../common/hook-form/RHFTextAre';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

interface ICreateErrorProps {
  open: boolean;
  mode: 'create' | 'edit';
  defaultData?: unknown;
  onCancel: () => void;
}

type CreateErrorForm = {
  code: string;
  message: string;
  description?: string;
  devicestype: string;
  errorlevel: string;
  errortype: string;
};

const errorTypes: Array<ISelectOption<string>> = [
  {
    label: 'Zero generation',
    value: '1',
  },
];
const errorLevels: Array<ISelectOption<string>> = [
  {
    label: 'COMM',
    value: '1',
  },
];
const devicesTypes: Array<ISelectOption<string>> = [
  {
    label: 'E51C',
    value: '1',
  },
];

const CreateError = ({open, onCancel}: ICreateErrorProps) => {
  const chema = Yup.object().shape({
    code: Yup.string().required('Field is requied.'),
    message: Yup.string().required('Field is requied.'),
    devicestype: Yup.string().required('Field is requied.'),
    errorlevel: Yup.string().required('Field is requied.'),
    errortype: Yup.string().required('Field is requied.'),
  });

  const methods = useForm<CreateErrorForm>({
    resolver: yupResolver(chema),
    defaultValues: {
      code: '',
      message: '',
      description: '',
      devicestype: '',
      errorlevel: '',
      errortype: '',
    },
  });

  const {reset, handleSubmit} = methods;

  const summit = () => {
    reset({
        code: '',
        message: '',
        description: '',
        devicestype: '',
        errorlevel: '',
        errortype: '',
      })
    onCancel();
  };

  return (
    <PrimaryModal position="center" visible={open} onCancel={onCancel}>
      <View style={styles.container}>
        <FormProvider {...methods}>
          <View style={styles.row}>
            <View style={styles.item}>
              <RHFInputLabel label="Error code" name="code" />
            </View>
            <View style={styles.item}>
              <RHFSelect
                label="Device type"
                name="devicestype"
                options={devicesTypes}
              />
            </View>
          </View>
          <RHFTextAre name="message" label="Message" />
          <RHFTextAre name="description" label="Description" />
          <View style={styles.row}>
            <View style={styles.item}>
              <RHFSelect
                label="Error level"
                name="errorlevel"
                options={errorLevels}
              />
            </View>
            <View style={styles.item}>
              <RHFSelect
                label="Error type"
                name="errortype"
                options={errorTypes}
              />
            </View>
          </View>
        </FormProvider>
        <Buton onPress={handleSubmit(summit)}>Save</Buton>
      </View>
    </PrimaryModal>
  );
};

export default CreateError;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: 'flex',
    gap: 16,
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  item: {
    flex: 1,
  },
});
