/********************************************************
 * Copyright 2024 NEXT WAVE ENERGY MONITORING INC.
 * All rights reserved.
 *
 *********************************************************/

interface IRouteName {
  [key: string]: string;
}

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
  AlertsNavigation: alertRouteNames,
  PortfolioNavigation: portfolioRouteName,
  SearchAndFilter: 'SearchAndFilter',
};

export const settingRouteNames = {
  Setup: routeName.Setup,
  AlertConfig: 'AlertConfig',
  SiteSetting: 'SiteSetting',
};
