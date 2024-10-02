package com.nwplatform.modules

import android.content.Context
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReadableArray
import com.github.mikephil.charting.utils.ColorTemplate
import com.github.mikephil.charting.animation.Easing;
import com.github.mikephil.charting.charts.PieChart;
import com.github.mikephil.charting.components.Legend;
import com.github.mikephil.charting.data.Entry;
import com.github.mikephil.charting.data.PieData;
import com.github.mikephil.charting.data.PieDataSet;
import com.github.mikephil.charting.data.PieEntry;
import com.github.mikephil.charting.charts.CombinedChart

import android.widget.TextView;
import android.graphics.Typeface;
import android.graphics.Color;

class PieChartView(context: Context) : PieChart(context) {
    private val tfRegular: Typeface = Typeface.create("sans-serif", Typeface.NORMAL)

    init {
        configureChart()
    }

    fun configureChart(){
        this.animateY(1400, Easing.EaseInOutQuad);
        this.setDrawCenterText(true);
        this.description.isEnabled = false
        this.setUsePercentValues(true)
        this.description.isEnabled = false
        this.legend.isEnabled = false
        this.legend.setXEntrySpace(7f)
        this.legend.setDrawInside(false)
        this.legend.setVerticalAlignment(Legend.LegendVerticalAlignment.TOP);
        this.legend.setHorizontalAlignment(Legend.LegendHorizontalAlignment.RIGHT);
        this.setEntryLabelColor(Color.WHITE);
        this.setEntryLabelTypeface(tfRegular);
        this.setEntryLabelTextSize(12f);
        this.setDrawHoleEnabled(true);
        this.setHoleColor(Color.WHITE);
        this.setTransparentCircleColor(Color.WHITE);
        this.setTransparentCircleAlpha(110);
    }

    fun setPieChartData(dataSet: PieDataSet) {
        val pieChart = PieData(dataSet)

        this.data = pieChart
        this.invalidate()
    }
}


class PieChartManager : SimpleViewManager<PieChartView>() {
    override fun getName(): String {
        return "RCTPieChart"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): PieChartView {
        return PieChartView(reactContext);
    }

    @ReactProp(name = "data")
    fun setData(pieChart: PieChartView, data: ReadableArray) {
        val entries = ArrayList<PieEntry>()
        val colors = ArrayList<Int>()

        for (i in 0 until data.size()) {
            val dataSet = data.getMap(i) ?: continue
            val value = dataSet.getDouble("value").toFloat() ?: 0f
            val label = dataSet.getString("label") ?: ""
            val color = dataSet.getString("color") ?: "#000000"

            entries.add(PieEntry(value, label))
            colors.add(Color.parseColor(color))
        }

        val pieDataSet = PieDataSet(entries, "")

        pieDataSet.colors = colors

        pieChart.setPieChartData(pieDataSet)
    }
}