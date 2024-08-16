/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React, {Fragment, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MyTag from '../../../common/base/MyTag';
import ButtonIcon from '../../../common/components/button/ButtonIcon';
import IconButton from '../../../common/components/button/IconButton';
import PrimaryInput from '../../../common/components/input/PrimaryInput';
import PrimaryModal from '../../../common/components/modal/PrimaryModal';
import H3 from '../../../common/components/text/H3';
import useThemeContext from '../../../hooks/useThemeContext';
import {getDifferenceArray} from '../../../utils/array';
import {getRandomNumber} from '../../../utils/getRandomNumber';
import {OTHER_COLOR_KEY_LIST} from '../../../constants/palette';

interface IMoreTagProps {
  currentTag: TagType[];
  listTag: TagType[];
  hanldeAddTag: (name: string) => void;
  hanldeRevomeTag: (id: string) => void;
  handleSelectTag: (id: string) => void;
}

const Tag = ({
  iconName,
  tag,
  hanldeOnPress,
}: {
  iconName: IconNameType;
  tag: TagType;
  hanldeOnPress: (id: string) => void;
}) => {
  const getColor = useMemo(() => {
    return OTHER_COLOR_KEY_LIST[
      getRandomNumber(OTHER_COLOR_KEY_LIST.length - 1)
    ];
  }, [tag.id]);

  return (
    <MyTag
      key={tag.id}
      color={getColor}
      icon
      iconName={iconName}
      onPress={() => hanldeOnPress(tag.id)}>
      {tag.name}
    </MyTag>
  );
};

const MoreTag = ({
  currentTag,
  listTag,
  hanldeAddTag,
  hanldeRevomeTag,
  handleSelectTag,
}: IMoreTagProps) => {
  const theme = useThemeContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [newTagName, setNewTagName] = useState('');

  const isNameTagEmpty = useMemo(() => newTagName.trim() === '', [newTagName]);

  const onCancel = () => {
    setModalVisible(false);
  };

  const onOk = () => {
    setModalVisible(false);
  };

  const onAddTag = () => {
    if (isNameTagEmpty) {
      return;
    }

    hanldeAddTag(newTagName);
    setNewTagName('');
  };

  return (
    <Fragment>
      <ButtonIcon
        touchableOpacityStyles={{
          ...styles.btn,
          backgroundColor: theme.palette.background.yellow,
        }}
        text="Tag"
        iconName="plus"
        touchableOpacityProps={{
          onPress: () => setModalVisible(true),
        }}
      />
      <PrimaryModal
        visible={modalVisible}
        position="center"
        onCancel={onCancel}
        onOk={onOk}>
        <View style={styles.container}>
          <View style={styles.tagContainer}>
            <H3>Current Tag:</H3>
            <View style={styles.tags}>
              {currentTag.map(_tag => (
                <Tag
                  key={_tag.id}
                  iconName="close"
                  tag={_tag}
                  hanldeOnPress={hanldeRevomeTag}
                />
              ))}
            </View>
          </View>
          <View style={styles.newTagContainer}>
            <PrimaryInput
              containerStyle={styles.input}
              value={newTagName}
              placeholder="Enter new tag name"
              onChange={vl => setNewTagName(vl)}
            />
            <IconButton
              disabled={isNameTagEmpty}
              style={{
                ...styles.btn,
                backgroundColor: isNameTagEmpty
                  ? theme.palette.background.disable
                  : theme.palette.background.yellow,
                ...styles.btnAdd,
              }}
              iconName="plus"
              onPress={onAddTag}
            />
          </View>
          <View style={styles.listTag}>
            {getDifferenceArray<TagType>(listTag, currentTag, 'id').map(
              _tag => (
                <Tag
                  key={_tag.id}
                  tag={_tag}
                  iconName="plus"
                  hanldeOnPress={handleSelectTag}
                />
              ),
            )}
          </View>
        </View>
      </PrimaryModal>
    </Fragment>
  );
};

export default MoreTag;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 8,
    flexDirection: 'column',
    gap: 16,
  },
  btn: {
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    justifyContent: 'flex-start',
    width: '100%',
  },
  newTagContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  btnAdd: {
    flex: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 19,
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    maxWidth: 250,
    // backgroundColor: 'red',
  },
  listTag: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    maxWidth: '100%',
    // backgroundColor: 'red',
  },
});
