/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import RadioButton from './RadioButton';

interface IRadiobuttonGroupColumnProps {
  defaultChecked?: string;
  checkAll?: boolean;
  options: IRadio[];
  numColumns?: number;
  textSize?: number;
  touchableOpacityStyles?: ViewStyle;
  onChange?: (value: string[], checkAll: boolean) => void;
}

const Row = ({children}: {children: React.ReactNode}) => {
  return <View style={styles.row}>{children}</View>;
};

const RadioButtonGroupColumn = ({
  defaultChecked,
  checkAll = false,
  options,
  numColumns = 1,
  textSize,
  touchableOpacityStyles,
  onChange,
}: IRadiobuttonGroupColumnProps) => {
  const [selecteds, setSelecteds] = useState<string[]>(
    defaultChecked ? [defaultChecked] : [],
  );

  useEffect(() => {
    handleCheckAll(checkAll);
  }, [defaultChecked, checkAll]);

  const handleCheckAll = useCallback((checkAll: boolean) => {
    if (checkAll) {
      setSelecteds(options.map(option => option.value));
    }
  }, []);

  const isChecked = useMemo(() => {
    return (value: string) => selecteds.includes(value);
  }, [selecteds]);

  const handleSelect = useCallback((value: string, isChecked: boolean) => {
    if (isChecked) {
      setSelecteds(prev => {
        const team = [...prev, value];

        if (onChange) onChange(team, team.length === options.length);

        return team;
      });
    } else {
      setSelecteds(prevLogLevels => {
        const team = prevLogLevels.filter(item => item !== value);

        if (onChange) onChange(team, false);

        return team;
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      {new Array(Math.ceil(options.length / numColumns))
        .fill(0)
        .map((_, index) => (
          <Row key={index}>
            {options
              .slice(index * numColumns, (index + 1) * numColumns)
              .map(option => (
                <RadioButton
                  checked={isChecked(option.value)}
                  onChange={handleSelect}
                  key={option.value}
                  touchableOpacityStyles={{
                    ...styles.touchableOpacityStyles,
                    ...touchableOpacityStyles,
                  }}
                  value={option.value}
                  textSize={textSize}>
                  {option.label}
                </RadioButton>
              ))}
          </Row>
        ))}
    </View>
  );
};

export default RadioButtonGroupColumn;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
  touchableOpacityStyles: {
    flex: 1,
  },
});
