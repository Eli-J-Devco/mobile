package com.nwplatform.modules

import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.data.LineDataSet
import com.github.mikephil.charting.data.LineData
import com.facebook.react.uimanager.annotations.ReactProp
import com.github.mikephil.charting.components.XAxis
import com.github.mikephil.charting.components.YAxis
import com.github.mikephil.charting.formatter.IndexAxisValueFormatter

class LineChartManager : SimpleViewManager<LineChart>() {
    override fun getName(): String {
        return "RCTALineChart"
    }

    override fun createViewInstance(reactContext: ThemedReactContext) : LineChart {
        val lineChart = LineChart(reactContext)

        val yAxisLeft: YAxis = lineChart.axisLeft
        yAxisLeft.isEnabled = true
        yAxisLeft.setDrawGridLines(true)

        val yAxisRight: YAxis = lineChart.axisRight
        yAxisRight.isEnabled = false    

        val xAxis: XAxis = lineChart.xAxis
        xAxis.position = XAxis.XAxisPosition.BOTTOM
        xAxis.labelRotationAngle = -45f

        lineChart.description.isEnabled = false
        lineChart.legend.isEnabled = false

        return lineChart
    }

    @ReactProp(name = "data")
    public fun updateValueChart(lineChart: LineChart, data: ReadableMap){
        val entries = ArrayList<Entry>()
        val listLabels = mutableListOf<String>()

        val values = data.getArray("values") ?: return
        val labels = data.getArray("labels") ?: return

        for (i in 0 until values.size()) {
            val value = values.getDouble(i).toFloat()
            entries.add(Entry(i.toFloat(), value))
        }

        for (i in 0 until labels.size()) {
            val label = labels.getString(i) ?: ""
            listLabels.add(label)
        }

        val dataSet = LineDataSet(entries, "")
        dataSet.color = 0xFF808080.toInt()

        val lineData = LineData(dataSet)
        lineChart.data = lineData

        lineChart.xAxis.valueFormatter = IndexAxisValueFormatter(listLabels)
        lineChart.xAxis.setLabelCount(listLabels.size, true)

        lineChart.invalidate()
    }
}