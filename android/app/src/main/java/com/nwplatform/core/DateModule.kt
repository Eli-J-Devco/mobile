package com.nwplatform.modules

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

class DateModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "DateModule"
    }

    @ReactMethod
    fun getCurrentDate(callback: Callback) {
        val dateFormat = SimpleDateFormat("dd/MM/yyyy", Locale.getDefault())
        val date = dateFormat.format(Date())
        callback.invoke(date)
    }
}