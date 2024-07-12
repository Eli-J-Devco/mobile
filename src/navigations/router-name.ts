/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

interface IRouteName {
  [key: string]: string;
}

export const rootRouteName = {
  Login: 'Login',
  DrawerNavigation: 'DrawerNavigation',
};

export const drawerRouteName = {
  BottomNavigation: 'BottomNavigation',
};

export const routeName: IRouteName = {
  Home: 'Home',
  Setup: 'Setup',
  Reports: 'Reports',
  Portfolio: 'Portfolio',
  Menu: 'Menu',
};

export const portfolioRouteName = {
  Portfolio: 'Portfolio',
  PortfolioDetails: 'PortfolioDetails',
  PortfolioFilter: 'PortfolioFilter',
  ArrangeColumns: 'ArrangeColumns',
};

export const alertRouteNames = {
  Alerts: 'Alerts',
  AlertFilter: 'AlertFilter',
};

export const dashboardRouteNames = {
  Dashboard: 'Dashboard',
  AlertsNavigation: alertRouteNames.Alerts,
  PortfolioNavigation: portfolioRouteName.Portfolio,
  SearchAndFilter: 'SearchAndFilter',
  SiteOverView: 'SiteOverView',
  Map: 'Map',
};

export const settingRouteNames = {
  Setup: 'SetupSreen',
  AlertConfig: 'AlertConfig',
  SiteSetting: 'SiteSetting',
  PVModelSettings: 'PVModelSettings',
};
