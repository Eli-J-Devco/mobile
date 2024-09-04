package com.nwplatform.modules

import android.content.Context
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.github.mikephil.charting.charts.BarChart
import com.github.mikephil.charting.components.XAxis
import com.github.mikephil.charting.data.BarData
import com.github.mikephil.charting.formatter.IndexAxisValueFormatter
import com.facebook.react.bridge.ReadableArray
import com.github.mikephil.charting.data.BarEntry
import com.github.mikephil.charting.utils.ColorTemplate
import com.github.mikephil.charting.data.BarDataSet
import android.graphics.Color

class GroupedBarChartView(context: Context): BarChart(context) {

    init {
        configureChart()
    }

    private fun configureChart() {
        this.description.isEnabled = false // Hide the description
        this.setDrawGridBackground(false) // Hide the background grid
        this.xAxis.position = XAxis.XAxisPosition.BOTTOM // Set the x-axis position to bottom
        this.axisRight.isEnabled = false
        this.legend.isEnabled = true
        this.xAxis.granularity = 1f 
        this.fitScreen()
    }

    fun setGroupedData(dataSets: List<BarDataSet>, labels: List<String>) {
        val barData = BarData(dataSets)
        this.data = barData

        val groupSpace = 0.08f
        val barSpace = 0.03f
        val barWidth = 0.2f

        barData.barWidth = barWidth
        this.groupBars(0f, groupSpace, barSpace)
        // this.xAxis.valueFormatter = IndexAxisValueFormatter(labels)
        this.invalidate()
    }
}

class GroupedBarChartManager : SimpleViewManager<GroupedBarChartView>() {
    override fun getName(): String {
        return "GroupedBarChart"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): GroupedBarChartView {
        return GroupedBarChartView(reactContext)
    }

    @ReactProp(name = "data")
    fun setData(chart: GroupedBarChartView, data: ReadableArray) {
        val dataSets = ArrayList<BarDataSet>()
        val labels = ArrayList<String>()
        val colors = ArrayList<Int>()

        for (i in 0 until data.size()) {
            val dataSet = data.getMap(i)
            val label = dataSet?.getString("label") ?: ""
            val values = dataSet?.getArray("values") ?: continue
            val color = Color.parseColor(dataSet?.getString("color")) 

            val entries = ArrayList<BarEntry>()
            for (j in 0 until values.size()) {
                val value = values?.getDouble(j)?.toFloat()

                entries.add(BarEntry(j.toFloat(), value ?: 0f))
            }

            labels.add(label ?: "Label$i")
            val barDataSet = BarDataSet(entries, label)
            barDataSet.color = color
            dataSets.add(barDataSet)
        }
        chart.setGroupedData(dataSets, labels)
    }
}