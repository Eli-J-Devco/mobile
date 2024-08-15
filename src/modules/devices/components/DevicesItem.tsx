import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconImage from '../../../common/components/icons/IconImage';
import H3 from '../../../common/components/text/H3';
import PrimaryCardItem from '../../../common/components/view/PrimaryCardItem';
import TextBetweenView from '../../../common/components/view/TextBetweenView';
import MoreTag from './MoreTag';

const DevicesItem = () => {
  const [currentTag, setCUrrentTag] = useState<TagType[]>([
    {name: 'My Tag', id: '1'},
    {name: 'My Tag 1', id: '2'},
    {name: 'My Tag 2', id: '3'},
    {name: 'My Tag 3', id: '4'},
  ]);
  const [listTag, setListTag] = useState<TagType[]>([
    {name: 'My Tag', id: '1'},
    {name: 'My Tag 1', id: '2'},
    {name: 'My Tag 2', id: '3'},
    {name: 'My Tag 3', id: '4'},
    {name: 'My Tag 5', id: '5'},
  ]);

  const handleAddTag = (name: string) => {
    const newTag = {name: name, id: new Date().getTime() + ''};

    setCUrrentTag(prev => [...prev, newTag]);
    setListTag(prev => [...prev, newTag]);
  };

  const handleSelectTag = (id: string) => {
    const tag = listTag.find(tag => tag.id === id);

    if (tag) {
      setCUrrentTag(prev => [...prev, tag]);
    }
  };

  const hanldeRevomeTag = (id: string) => {
    setCUrrentTag(prev => prev.filter(tag => tag.id !== id));
  };

  return (
    <PrimaryCardItem>
      <View style={styles.left}>
        <IconImage iconName="checkBlue" size={26} />
      </View>
      <View style={styles.right}>
        <H3>Elkor WattsOn Mk. II</H3>
        <TextBetweenView leftText="ID" rightText="INV2874" />
        <TextBetweenView
          leftText="Device Categorize"
          rightText="PV System Inverter"
        />
        <TextBetweenView leftText="Modbus" rightText="10" />
        <TextBetweenView leftText="Value" rightText="3.6 kW" />
        <TextBetweenView leftText="Rating AC Power" rightText="50 kW" />
        <TextBetweenView leftText="Datalogger S/N" rightText="001EC6056E57" />
        <TextBetweenView leftText="Order ID" rightText="4" />
        <TextBetweenView leftText="Serial Number" rightText="N/A" />
        <TextBetweenView
          leftText="Last Updated"
          rightText="06/30/2024 08:30 AM"
        />
        <View style={styles.bottom}>
          {/* <ButtonIcon
            touchableOpacityStyles={{
              ...styles.btn,
              backgroundColor: theme.palette.background.yellow,
            }}
            text="Tag"
            iconName="plus"
          /> */}
          <MoreTag
            listTag={listTag}
            currentTag={currentTag}
            hanldeAddTag={handleAddTag}
            hanldeRevomeTag={hanldeRevomeTag}
            handleSelectTag={handleSelectTag}
          />
        </View>
      </View>
    </PrimaryCardItem>
  );
};

export default DevicesItem;

const styles = StyleSheet.create({
  left: {
    flex: 1,
  },
  right: {
    flex: 10,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingTop: 16,
  },
});
