//
//  ChartManagerBridge.m
//  NWPlatform
//
//  Created by quis on 17/09/2024.
//

#import <Foundation/Foundation.h>

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RCTBarChart, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(chartData, NSArray)
@end

@interface RCT_EXTERN_MODULE(RCTLineChart, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(chartData, NSArray)
RCT_EXPORT_VIEW_PROPERTY(labels, NSArray)
@end
