import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import ButonText from '../../../common/components/button/ButonText';
import MyTree from '../../../common/base/MyTree';
import PrimaryFooter from '../../../common/components/footer/PrimaryFooter';

const treeData: any = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 4,
    name: 'Leviton',
    children: [
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'PRS office Vietnam',
        children: [
          {
            id: 6,
            name: 'Child 4',
            children: [
              {
                id: 8,
                name: 'Child 5',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'NW',
    children: [
      {
        id: 10,
        name: 'ACRA Investments, Inc.',
      },
      {
        id: 11,
        name: 'ACRA Investments, Inc.',
      },
      {
        id: 14,
        name: 'ACRA Investments, Inc.',
      },
    ],
  },
];

const AlertFilter = () => {
  const theme = useThemeContext();

  const titleStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.sm,
    fontWeight: '700',
  };

  const btnTextStyle: TextStyle = {
    color: theme.palette.text.primary,
    fontSize: theme.font.size.xs,
    fontWeight: '400',
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
        }}>
        <View style={[styles.container]}>
          <View style={[styles.wraped]}>
            <Text style={titleStyle}>Site Name:</Text>
            <MyTree
              data={treeData}
              onChecked={(x, y) => {
                console.log('----x----: ', x);
                console.log('----y----: ', y);
              }}
            />
          </View>
          <View style={[styles.wraped]}>
            <View style={styles.row}>
              <Text style={titleStyle}>Device Categorize:</Text>
              <ButonText
                text="ALL"
                touchableOpacityStyles={{
                  borderRadius: 20,
                  width: 'auto',
                  paddingHorizontal: 16,
                  paddingVertical: 4,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="COMM"
                touchableOpacityStyles={{
                  flex: 1,
                  borderRadius: 20,
                }}
              />
              <ButonText
                text="ERROR"
                touchableOpacityStyles={{
                  flex: 1,
                  borderRadius: 20,
                }}
              />
              <ButonText
                text="INFO"
                touchableOpacityStyles={{
                  flex: 1,
                  borderRadius: 20,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="PRODUCTION"
                touchableOpacityStyles={{
                  flex: 1,
                  borderRadius: 20,
                }}
              />
              <ButonText
                text="DEBUG"
                touchableOpacityStyles={{
                  flex: 1,
                  borderRadius: 20,
                }}
              />
              <ButonText
                text="FATAL"
                touchableOpacityStyles={{
                  flex: 1,
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
          <View style={[styles.wraped]}>
            <View style={styles.row}>
              <Text style={titleStyle}>Error Type:</Text>
              <ButonText
                text="ALL"
                touchableOpacityStyles={{
                  borderRadius: 20,
                  width: 'auto',
                  paddingHorizontal: 16,
                  paddingVertical: 4,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="System Disconnect"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="String Performance"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Performance Index"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="Zero Generation"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Device Fault"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
          </View>
          <View style={[styles.wraped]}>
            <View style={styles.row}>
              <Text style={titleStyle}>Device Categorize:</Text>
              <ButonText
                text="ALL"
                touchableOpacityStyles={{
                  borderRadius: 20,
                  width: 'auto',
                  paddingHorizontal: 16,
                  paddingVertical: 4,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="PV System Inverter"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="Production Meter"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Solar Tracker"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="Datalogger"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
            <View style={styles.row}>
              <ButonText
                text="Sensor"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
              <ButonText
                text="Weather Station"
                touchableOpacityStyles={{
                  flex: 1,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <PrimaryFooter />
    </>
  );
};

export default AlertFilter;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    alignItems: 'flex-start',
    padding: 16,
    width: '100%',
    // backgroundColor: 'red',
  },
  wraped: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    gap: 16,
    borderRadius: 8,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
  },
  deviceItem: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  all: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  input: {
    borderColor: '#C5C5C5',
    borderWidth: 1,
    borderRadius: 8,
    height: 37,
    width: '100%',
  },
});
