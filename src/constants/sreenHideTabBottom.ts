import {
  alertRouteNames,
  dashboardRouteNames,
  devicesRouteNames,
  portfolioRouteName,
  settingRouteNames,
} from '../navigations/router-name';

const SREEN_HIDE_TAB_BOTTOM = [
  portfolioRouteName.PortfolioFilter,
  portfolioRouteName.ArrangeColumns,
  alertRouteNames.AlertFilter,
  dashboardRouteNames.SearchAndFilter,
  settingRouteNames.AlertConfig,
  settingRouteNames.SiteSetting,
  settingRouteNames.PVModelSettings,
  dashboardRouteNames.Map,
  devicesRouteNames.FilterColumns,
  alertRouteNames.AlertDetail,
];

export default SREEN_HIDE_TAB_BOTTOM;
