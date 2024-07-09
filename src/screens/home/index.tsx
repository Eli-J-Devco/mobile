/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import React from 'react';
import {StyleSheet} from 'react-native';
import MainLayout from '../../layouts/MainLayout';
import Dashboard from '../../modules/dashboard';

const Home = () => {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 2,
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
    flex: 6,
    paddingTop: 50,
  },
  header: {
    flex: 2,
    backgroundColor: 'tranperant',
    width: '100%',
    position: 'relative',
  },
  action: {
    position: 'absolute',
    width: '100%',
    height: 80,
    display: 'flex',
    paddingHorizontal: 24,
    bottom: -40,
    zIndex: 1,
  },
  actionContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    // boxShadow: '0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
    shadowColor: '#333',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  actionIcon: {
    backgroundColor: '#E6EFFC',
    borderRadius: 8,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionLable: {
    fontSize: 12,
    color: '#000000',
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    width: '100%',
    flex: 1,
    gap: 16,
  },
  searchInput: {
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    flex: 4,
    height: 37,
    paddingLeft: 8,
  },
  headerBtnContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'center',
  },
  headerBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
