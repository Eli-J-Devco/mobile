package com.nwplatform.modules

import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.github.mikephil.charting.charts.BarChart
import com.github.mikephil.charting.components.XAxis
import com.github.mikephil.charting.components.YAxis
import com.github.mikephil.charting.data.BarData
import com.github.mikephil.charting.data.BarDataSet
import com.github.mikephil.charting.data.BarEntry
import com.github.mikephil.charting.formatter.IndexAxisValueFormatter

class BarChartManager : SimpleViewManager<BarChart>() {
    override fun getName(): String {
        return "RCTABarChart"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): BarChart {
        val barChart = BarChart(reactContext)

        val yAxisLeft: YAxis = barChart.axisLeft
        yAxisLeft.isEnabled = true
        yAxisLeft.setDrawGridLines(true)

        val yAxisRight: YAxis = barChart.axisRight
        yAxisRight.isEnabled = false

        val xAxis: XAxis = barChart.xAxis
        xAxis.position = XAxis.XAxisPosition.BOTTOM 
        xAxis.labelRotationAngle = -45f
        // xAxis.setDrawGridLines(true)  
        // xAxis.setDrawLabels(true) 
        // xAxis.textSize = 12f
        // xAxis.granularity = 1f  
        // xAxis.isGranularityEnabled = true
        // xAxis.setAvoidFirstLastClipping(false)

        barChart.description.isEnabled = false
        barChart.legend.isEnabled = false
        // barChart.viewPortHandler.setMaximumScaleX(1f) 
        // barChart.fitScreen()

        return barChart
    }

    @ReactProp(name = "data")
    public fun updateValueChart(barChart: BarChart, data: ReadableMap) {
        val entries = ArrayList<BarEntry>()
        val labelList = mutableListOf<String>()
        val values = data.getArray("values") ?: return
        val labels = data.getArray("labels") ?: return

        for (i in 0 until values.size()) {
            val value = values.getDouble(i).toFloat()
            entries.add(BarEntry(i.toFloat(), value))
        }
   
        for (i in 0 until labels.size()) {
            val label = labels.getString(i) ?: ""
            labelList.add(label)
        }

        val dataSet = BarDataSet(entries,"")
        dataSet.color = 0xFF808080.toInt()

        val barData = BarData(dataSet)
        barChart.data = barData
    
        barChart.xAxis.valueFormatter = IndexAxisValueFormatter(labelList)
        barChart.xAxis.setLabelCount(labelList.size, false)

        barChart.invalidate() 
    }
}