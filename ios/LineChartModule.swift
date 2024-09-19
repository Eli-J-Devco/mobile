//
//  LineChartModule.swift
//  NWPlatform
//
//  Created by quis on 18/09/2024.
//

import Foundation
import React
import DGCharts


@objc(RCTLineChart)
class LineChartManager : RCTViewManager {
    override func view() -> UIView!{
        let lineChart = LineChartCustomView()
          
      let xAxis = lineChart.xAxis
      xAxis.labelRotationAngle = -45
      xAxis.labelPosition = .bottom
      
      let yRight = lineChart.rightAxis
      yRight.enabled = false
  
        lineChart.legend.enabled = false
        
        return lineChart
    }
    
    @objc override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}

class LineChartCustomView : LineChartView, AxisValueFormatter {
  var xLabels :[String] = []
  @objc func setChartData(_ data: NSArray, labels: NSArray) {
        var dataEntries:[ChartDataEntry] = []

        for (index, item) in data.enumerated() {
            if let value = item as? NSNumber {
                let entry = ChartDataEntry( x: Double(index), y: value.doubleValue)
                dataEntries.append(entry)
            }
        }
      
      let dataSet = LineChartDataSet(entries: dataEntries, label: "")
      let data = LineChartData(dataSet: dataSet)
      
    self.xLabels = labels as? [String] ?? []
    
    self.xAxis.valueFormatter = self
      
      self.notifyDataSetChanged()
    }
  
  func stringForValue(_ value: Double, axis: AxisBase?) -> String {
      let index = Int(value)
      if index >= 0 && index < xLabels.count {
        return xLabels[index]
      }
      return ""
    }
}
