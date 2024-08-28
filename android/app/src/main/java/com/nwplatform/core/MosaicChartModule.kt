package com.nwplatform.modules

import android.content.Context
import android.widget.FrameLayout
import com.anychart.AnyChart
import com.anychart.AnyChartView
import com.anychart.chart.common.dataentry.DataEntry
import com.anychart.chart.common.dataentry.ValueDataEntry
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReadableArray
import com.anychart.enums.TooltipPositionMode
import com.anychart.enums.HoverMode
import com.anychart.data.Mapping;
import com.anychart.data.Set;
import com.anychart.charts.Cartesian;
import com.anychart.enums.MarkerType;

class MosaicChartView(context: Context) : FrameLayout(context){
    private val anyChartView: AnyChartView = AnyChartView(context)
    private val areaChart: Cartesian = AnyChart.area();
    private val set: Set = Set.instantiate()
    private val crosshair = areaChart.crosshair();
  
    init {
        addView(anyChartView, LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT))
        anyChartView.setChart(areaChart)
    }

    fun setData(data: List<DataEntry>) {

       

        set.data(data);
        val series1Data : Mapping = set.mapAs("{ x: 'x', value: 'value' }");

        val series1 = areaChart.area(series1Data)
        series1.name("Americas")
        series1.stroke("3 #fff")
        series1.hovered().stroke("3 #fff")
        series1.hovered().markers().enabled(true)
        series1.hovered().markers()
            .type(MarkerType.CIRCLE)
            .size(4.0)
            .stroke("1.5 #fff")
        series1.markers().zIndex(100.0)

        areaChart.data(data)
    }

    fun setTitle(title: String) {
        areaChart.title(title)
    }

    fun configureChart() {
        areaChart.animation(true)
        areaChart.tooltip().positionMode(TooltipPositionMode.POINT)
        areaChart.interactivity().hoverMode(HoverMode.BY_X)
        areaChart.xAxis(0).title("Categories")
        areaChart.xAxis(0).labels().enabled(true)
        areaChart.xAxis(0).labels().rotation(45) 
        areaChart.yAxis(0).title("Values")
    }
}

class MosaicChartManager : SimpleViewManager<MosaicChartView>() {
    override fun getName(): String {
        return "RCTMosaicChart"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): MosaicChartView {
        val view = MosaicChartView(reactContext)
        view.configureChart()

        return view
    }

    @ReactProp(name = "data")
    public fun setData(view: MosaicChartView, data: ReadableArray) {
        val dataEntry = mutableListOf<DataEntry>()
      

        for (i in 0 until data.size()) {
            val entry = data.getMap(i)

            if (entry != null) {
                val x = entry.getString("x") ?: ""
                val values = entry?.getArray("y") ?: continue

                dataEntry.add(CustomDataEntry(x, values.toArrayList().map { it as Double }))
               
            }
           
        }

        view.setData(dataEntry)

   
    }

    @ReactProp(name = "title")
    public fun setTitle(view: MosaicChartView, title: String) {
       title?.let { view.setTitle(title) }
    }

}


private class CustomDataEntry(x: String, values: List<Double>) : ValueDataEntry(x, values[0]) {
    
    init {
        for (i in 1 until values.size) {
            setValue("value$i", values[i])
        }
    }
}