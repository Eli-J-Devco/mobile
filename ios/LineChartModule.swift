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
      xAxis.gridLineWidth = 0
      
      let yRight = lineChart.rightAxis
      yRight.enabled = false
  
      lineChart.legend.enabled = false
      
      
      return lineChart
    }
    
    @objc override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}

class LineChartCustomView : LineChartView {
  
  @objc func setChartData(_ data: NSDictionary) {
    guard let labels = data["labels"] as? [String],
          let values = data["values"] as? [Double] else {
      return
    }
    
    var dataEntries:[ChartDataEntry] = []
    
    for i in 0..<values.count {
      let entry = ChartDataEntry(x: Double(i), y: values[i])
      dataEntries.append(entry)
    }
    
    let dataSet = LineChartDataSet(entries: dataEntries, label: "")
    let data = LineChartData(dataSet: dataSet)
    
    self.xAxis.valueFormatter = IndexAxisValueFormatter(values: labels)
    self.xAxis.granularity = 1
    self.xAxis.setLabelCount(labels.count, force: true)
      
    self.data = data
    self.notifyDataSetChanged()
    
  }
  
}
