/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

import {Alert} from 'react-native';
import Portfolio from '../modules/dashboard/components/portfolio';

interface IRouteName {
  [key: string]: string;
}

export const rootRouteName = {
  Login: 'Login',
  DrawerNavigation: 'DrawerNavigation',
  BottomNavigation: 'BottomNavigation',
};

export const drawerRouteName = {
  BottomNavigation: 'BottomNavigation',
};

export const portfolioRouteName = {
  PortfolioNavigation: 'PortfolioNavigation',
  Portfolio: 'Portfolio',
  PortfolioDetails: 'PortfolioDetails',
  PortfolioFilter: 'PortfolioFilter',
  ArrangeColumns: 'ArrangeColumns',
};

export const reportsRouteNames = {
  ReportsNavigation: 'ReportsNavigation',
  Reports: 'Reports',
  ReportSetup: 'ReportSetup',
  ReportFilter: 'ReportFilter',
  AdditionalData: 'AdditionalData',
};

export const alertRouteNames = {
  AlertsNavigation: 'AlertsNavigation',
  Alerts: 'Alerts',
  AlertFilter: 'AlertFilter',
  AlertDetail: 'AlertDetail',
};

export const settingRouteNames = {
  SetupNavigation: 'SetupNavigation',
  Setup: 'Setup',
  AlertConfig: 'AlertConfig',
  SiteSetting: 'SiteSetting',
  PVModelSettings: 'PVModelSettings',
};

export const devicesRouteNames = {
  Devinavigation: 'Devinavigation',
  Devices: 'Devices',
  FilterColumns: 'FilterColumns',
  SummaryDetail: 'SummaryDetail',
};

export const dashboardRouteNames = {
  Dashboard: 'Dashboard',
  AlertsNavigation: alertRouteNames.AlertsNavigation,
  PortfolioNavigation: portfolioRouteName.PortfolioNavigation,
  SearchAndFilter: 'SearchAndFilter',
  SiteOverView: 'SiteOverView',
  Map: 'Map',
  Devices: devicesRouteNames.Devinavigation,
};

export const routeName: IRouteName = {
  Home: 'Home',
  Setup: settingRouteNames.SetupNavigation,
  Reports: 'Reports',
  Portfolio: 'Portfolio',
  Menu: 'Menu',
};
