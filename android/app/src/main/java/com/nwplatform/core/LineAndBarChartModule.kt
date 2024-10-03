package com.nwplatform.modules

import com.github.mikephil.charting.charts.CombinedChart
import com.github.mikephil.charting.components.XAxis
import com.github.mikephil.charting.data.BarData
import com.github.mikephil.charting.data.BarDataSet
import com.github.mikephil.charting.data.BarEntry
import com.github.mikephil.charting.data.CombinedData
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet
import com.github.mikephil.charting.formatter.IndexAxisValueFormatter
import com.github.mikephil.charting.utils.ColorTemplate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.ThemedReactContext

import android.content.Context
import com.facebook.react.uimanager.SimpleViewManager

class LineAndBarChartView(context: Context) : CombinedChart(context) {
    init {
        configureChart()
    }

    fun configureChart() {
        this.description.isEnabled = false
        this.setDrawGridBackground(false)
        this.xAxis.position = XAxis.XAxisPosition.BOTTOM
        this.axisRight.isEnabled = false
        this.xAxis.granularity = 1f // Ensure X-axis labels appear for each group
    }

    fun setCombinedData(barDataSets: List<BarDataSet>, lineDataSets: List<LineDataSet>, labels: List<String>) {
        val combinedData = CombinedData()

        val barData = BarData(barDataSets)
        barData.barWidth = 0.3f

        val lineData = LineData(lineDataSets)

        combinedData.setData(barData)
        combinedData.setData(lineData)

        this.data = combinedData

        this.xAxis.valueFormatter = IndexAxisValueFormatter(labels)
        this.invalidate()
    }
}

class LineAndBarChartManager: SimpleViewManager<LineAndBarChartView>() {
    override fun getName(): String {
        return "RCTLineAndBarChart"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): LineAndBarChartView {
        return LineAndBarChartView(reactContext)
    }

    @ReactProp(name = "barData")
    fun setData(chart: LineAndBarChartView, data: ReadableArray){
        val barDataSets = ArrayList<BarDataSet>()
        val labels = ArrayList<String>()

        for (i in 0 until data.size()) {}
    }
}