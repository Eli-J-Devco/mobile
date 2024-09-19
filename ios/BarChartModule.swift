//
//  BarChartModule.swift
//  NWPlatform
//
//  Created by quis on 17/09/2024.
//

import Foundation
import React
import DGCharts
import UIKit

@objc(RCTBarChart)
class BarChartManager : RCTViewManager {
    
    override func view() -> UIView! {
        let barChartView = BarChartViewCustom()
        return barChartView
    }

    @objc override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
class BarChartViewCustom: BarChartView {

  @objc func setChartData(_ data: NSArray) {

    var dataEntries: [BarChartDataEntry] = []
    
    for (index, value) in data.enumerated() {
      if let value = value as? NSNumber {
        let dataEntry = BarChartDataEntry(x: Double(index), y: value.doubleValue)
        dataEntries.append(dataEntry)
      }
    }
    
    // Create the dataset from entries
    let dataSet = BarChartDataSet(entries: dataEntries, label: "Bar Data")
    
    // Assign the dataset to the chart data
    let chartData = BarChartData(dataSet: dataSet)
    
    self.data = chartData
    self.notifyDataSetChanged()
  }
}
