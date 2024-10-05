/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {useCallback, useMemo, useState} from 'react';
import {NativeModules, Platform} from 'react-native';
const {PhotoPicker, AndroidPhotoPicker} = NativeModules;

export const useImagePicker = () => {
  const [data, setData] = useState<IIamge | null>(null);

  const selectPhoto = useCallback(async () => {
    try {
      const photo = Platform.OS === "ios" ? await PhotoPicker.selectPhoto() : await AndroidPhotoPicker.selectPhoto();

      setData(photo);
    } catch (error) {
      //   console.error(error);
    }
  }, []);

  const clearPhoto = useCallback(() => setData(null), []);

  const memoData = useMemo(
    () => ({
      data,
      selectPhoto,
      clearPhoto,
    }),
    [data],
  );

  return memoData;
};
