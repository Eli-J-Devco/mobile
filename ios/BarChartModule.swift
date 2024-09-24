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
        let barChart = BarChartViewCustom()
      
      let xAxis =  barChart.xAxis
      xAxis.labelPosition = .bottom
      xAxis.labelRotationAngle = -45
      
      barChart.rightAxis.enabled = false
      barChart.legend.enabled = false
        
        return barChart
    }

    @objc override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
class BarChartViewCustom: BarChartView {

  @objc func setChartData(_ data: NSDictionary) {
    
    guard let labels = data["labels"] as? [String],
          let values = data["values"] as? [Double] else {
      return
    }

    var dataEntries: [BarChartDataEntry] = []
    for i in 0..<values.count {
      let entry = BarChartDataEntry(x: Double(i), y: values[i])
      dataEntries.append(entry)
    }
    
    
    // Create the dataset from entries
    let dataSet = BarChartDataSet(entries: dataEntries, label: "Bar Data")
    
    // Assign the dataset to the chart data
    let chartData = BarChartData(dataSet: dataSet)
    
    self.data = chartData
    
    self.xAxis.valueFormatter = IndexAxisValueFormatter(values: labels)
    self.xAxis.granularity = 1
    
    self.notifyDataSetChanged()
  }
}
