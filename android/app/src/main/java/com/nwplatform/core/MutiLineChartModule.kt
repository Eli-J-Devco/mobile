package com.nwplatform.modules

import android.content.Context
import com.github.mikephil.charting.charts.LineChart
import com.github.mikephil.charting.data.LineData
import com.github.mikephil.charting.data.LineDataSet
import com.github.mikephil.charting.data.Entry
import com.github.mikephil.charting.interfaces.datasets.ILineDataSet
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReadableMap
import android.graphics.Color

class MutiLineChartView(context: Context) : LineChart(context) {

    public fun setData(dataSets: List<Pair<String, List<Entry>>>, colors: List<Int>) {
        val lineDataSets = mutableListOf<ILineDataSet>()   

        dataSets.forEachIndexed { index, dataSet ->
            val (label, entries) = dataSet
            val lineDateSet = LineDataSet(entries, label).apply { 
                color = colors[index]
                lineWidth = 2f
                setDrawCircles(false)
                setDrawValues(false)
                mode = LineDataSet.Mode.CUBIC_BEZIER
            }
            lineDataSets.add(lineDateSet)
        }

        val lineData = LineData(lineDataSets)
        this.data = lineData
        this.invalidate()
    }
}

class MutiLineChartManager : SimpleViewManager<MutiLineChartView>() {

    override fun getName(): String {
        return "RCTMutiLineChart"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): MutiLineChartView {
        return MutiLineChartView(reactContext)
    }

    @ReactProp(name = "data")
    public fun setData(view: MutiLineChartView, data: ReadableMap) {
        val dataArray = data.getArray("datasets") ?: return
        val colorsArray = data.getArray("colors") ?: return

        val dataSets = mutableListOf<Pair<String, List<Entry>>>()
        val colors = mutableListOf<Int>()

        for (i in 0 until dataArray.size()) {
            val dataSet = dataArray.getMap(i) ?: continue
            val label = dataSet?.getString("label") ?: ""
            val values = dataSet?.getArray("values") ?: continue

            val entries = values.toArrayList().mapIndexed { index, value -> 

                Entry(index.toFloat(), (value as Double).toFloat())
            }
            dataSets.add(Pair(label, entries))
        }

        for (i in 0 until colorsArray.size()) {
            val color = Color.parseColor(colorsArray.getString(i))
            colors.add(color)
        }

        view.setData(dataSets, colors)
    }
}