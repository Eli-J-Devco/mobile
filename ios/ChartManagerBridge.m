//
//  ChartManagerBridge.m
//  NWPlatform
//
//  Created by quis on 17/09/2024.
//

#import <Foundation/Foundation.h>

#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RCTBarChart, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(chartData, NSDictionary)
@end

@interface RCT_EXTERN_MODULE(RCTLineChart, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(chartData, NSDictionary)
@end

@interface RCT_EXTERN_MODULE(PhotoPicker, RCTBridge)
RCT_EXTERN_METHOD(selectPhoto:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
@end


