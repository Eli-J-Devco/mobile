import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyScrollView from '../../../common/base/MyScrollView';
import MySwicthText from '../../../common/base/MySwicthText';
import SelectLabel from '../../../common/components/select/SelectLabel';
import H2 from '../../../common/components/text/H2';
import H4Thin from '../../../common/components/text/H4Thin';
import Grid from '../../../common/components/view/Grid';
import PrimaryCardItem from '../../../common/components/view/PrimaryCardItem';
import ColorSetingItem from './ColorSetingItem';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';

const ReportSetup = () => {
  return (
    <>
      <MyScrollView paddingHorizontal={0}>
        <View style={styles.container}>
          <PrimaryCardItem layout="column" gap={16} padding={16}>
            <H2>Settings</H2>
            <SelectLabel label="Amount of Decimal Points to Be Display" />
            <View style={styles.switchContainer}>
              <Grid>
                <MySwicthText scale={0.6} textStyle={{fontSize: 12}} span={1}>
                  Legend
                </MySwicthText>
                <MySwicthText scale={0.6} textStyle={{fontSize: 12}} span={1}>
                  Filter
                </MySwicthText>
              </Grid>
              <Grid>
                <MySwicthText scale={0.6} textStyle={{fontSize: 12}} span={1}>
                  Group By Filed
                </MySwicthText>
                <MySwicthText scale={0.6} textStyle={{fontSize: 12}} span={1}>
                  Day/Night
                </MySwicthText>
              </Grid>
            </View>
            <SelectLabel label="Sort" />
          </PrimaryCardItem>
          <PrimaryCardItem layout="column" gap={16} padding={16}>
            <View style={styles.flex}>
              <H2>Chart Type</H2>
              <View>
                <MySwicthText scale={0.6} textStyle={{fontSize: 12}} span={1}>
                  All
                </MySwicthText>
              </View>
            </View>
            <SelectLabel label="Amount of Decimal Points to Be Display" />
            <SelectLabel label="Sort" />
          </PrimaryCardItem>
          <PrimaryCardItem layout="column" gap={16} padding={16}>
            <H2>Color Settings</H2>
            <View>
              <H4Thin>Chint/Solectria Inverter - AC Power</H4Thin>
              <View style={styles.colorSetting}>
                <Grid>
                  <ColorSetingItem />
                  <ColorSetingItem />
                </Grid>
                <Grid>
                  <ColorSetingItem />
                  <ColorSetingItem />
                </Grid>
              </View>
            </View>
            <View>
              <H4Thin>Chint/Solectria Inverter - AC Power</H4Thin>
              <View style={styles.colorSetting}>
                <Grid>
                  <ColorSetingItem />
                  <View style={{flex: 1}} />
                </Grid>
              </View>
            </View>
          </PrimaryCardItem>
        </View>
      </MyScrollView>

      <PrimaryFooter />
    </>
  );
};

export default ReportSetup;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  colorSetting: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 16,
  },
});
