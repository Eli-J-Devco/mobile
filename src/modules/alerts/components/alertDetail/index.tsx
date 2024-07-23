/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyScrollView from '../../../../common/base/MyScrollView';
import ChartLine from '../../../../common/components/chart/ChartLine';
import SelectLabel from '../../../../common/components/select/SelectLabel';
import Card from '../../../../common/components/view/Card';
import Item from '../../../../common/components/view/Item';
import InputLabel from '../../../../common/components/input/InputLabel';
import PrimaryTextArea from '../../../../common/components/input/PrimaryTextArea';
import MyCheckBoxText from '../../../../common/base/MyCheckBoxText';
import Grid from '../../../../common/components/view/Grid';
import PrimaryFooter from '../../../../common/components/footer/PrimaryFooter';
import MySwicthText from '../../../../common/base/MySwicthText';
import LineChartKit from '../../../../common/components/chart/LineChartKit';

const AlertDetail = () => {
  return (
    <>
      <MyScrollView>
        <View style={styles.container}>
          <Card tiltle="Component: Elkor WattsOn Mk. II">
            <View style={styles.infoContainer}>
              <Item lable="Opened" value="06/20/2024 10:00 AM" />
              <Item lable="Alert ID" value="124323112" mode="dark" />
              <Item lable="Last Comm" value="06/20/2024 10:00 AM" />
              <Item
                lable="Issue"
                value="Device has lost communication"
                mode="dark"
              />
              <Item lable="Description" />
            </View>
          </Card>
          <Card tiltle="Charting">
            <View style={styles.chart}>
              <LineChartKit />
            </View>
          </Card>
          <Card tiltle="Update">
            <View style={styles.update}>
              <Grid>
                <SelectLabel span={1} label="Error Level" placeholder="- - -" />
                <SelectLabel span={1} label="Status" placeholder="- - -" />
              </Grid>
              <InputLabel
                multiline
                label="Notes"
                containerStyle={{
                  minHeight: 100,
                }}
              />
              {/* <PrimaryTextArea /> */}
              <Grid gap={16}>
                <MySwicthText
                  span={1}
                  textStyle={{
                    fontSize: 12,
                  }}>
                  Alert acknowledged
                </MySwicthText>
                <MySwicthText
                  textStyle={{
                    fontSize: 12,
                  }}
                  span={1}>
                  Disable notification
                </MySwicthText>
              </Grid>
              <MySwicthText
                textStyle={{
                  fontSize: 12,
                }}>
                Resolved
              </MySwicthText>
            </View>
          </Card>
        </View>
      </MyScrollView>
      <PrimaryFooter cancleText="Cancel" okText="Save" />
    </>
  );
};

export default AlertDetail;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  infoContainer: {
    padding: 8,
    flexDirection: 'column',
  },
  chart: {
    padding: 8,
  },
  update: {
    padding: 8,
    flexDirection: 'column',
    gap: 16,
  },
  updateItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexDirection: 'row',
  },
});
