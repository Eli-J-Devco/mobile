/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useEffect, useMemo} from 'react';
import {Image, StyleSheet, Text, TextStyle, View} from 'react-native';
import {useImagePicker} from '../../../hooks/useImagePicker';
import MyTouchableOpacity from '../../base/MyTouchableOpacity';
import useThemeContext from '../../../hooks/useThemeContext';
import IconImage from '../icons/IconImage';
import IconButton from '../button/IconButton';

interface IImagePickerProps {
  defaultsUrl?: string;
  onChange?: (data: IIamge | null) => void;
}

const ImagePicker = ({onChange}: IImagePickerProps) => {
  const theme = useThemeContext();

  const {data, selectPhoto, clearPhoto} = useImagePicker();

  useEffect(() => {
    if (onChange) {
      onChange(data);
    }
  }, [data]);

  const tilteStyle: TextStyle = useMemo(
    () => ({
      fontSize: theme.font.size.xl,
      color: theme.palette.text.primary,
      fontWeight: '500',
      marginTop: 16,
    }),
    [],
  );

  const desStyle: TextStyle = useMemo(
    () => ({
      fontSize: theme.font.size.s,
      color: theme.palette.text.secondary,
      fontWeight: '400',
    }),
    [],
  );

  const nameStyle: TextStyle = useMemo(
    () => ({
      fontSize: theme.font.size.xs,
      color: theme.palette.text.primary,
      fontWeight: '400',
      maxWidth: '85%',
      overflow: 'hidden',
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <Text>Upload Your Attachment</Text>
      <MyTouchableOpacity
        onPress={selectPhoto}
        touchableOpacityStyle={styles.containerInput}>
        {!data && (
          <>
            <IconImage iconName="image" size={50} />
            <Text style={tilteStyle}>Preess to this area to upload</Text>
            <Text style={desStyle}>
              Support for a single upload image from photos library.
            </Text>
          </>
        )}
        {data?.url && (
          <Image src={data.url} style={styles.image} resizeMode="contain" />
        )}
      </MyTouchableOpacity>
      {data && (
        <View style={styles.imageNameWrapped}>
          <View style={styles.name}>
            <IconImage iconName="attachFile" size={16} />
            <Text numberOfLines={1} ellipsizeMode="middle" style={nameStyle}>
              {data.name}
            </Text>
          </View>
          <IconButton iconName="close" size={16} onPress={clearPhoto} />
        </View>
      )}
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 8,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  containerInput: {
    borderColor: '#cdcdcd',
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dashed',
    height: 200,
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 4,
  },
  imageNameWrapped: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
