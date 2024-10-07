package com.nwplatform.modules

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.provider.MediaStore
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class AndroidPhotoPicker(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var promise: Promise? = null
    private var PICK_IMAGE_REQUEST = 1

    override fun getName(): String {
        return "AndroidPhotoPicker"
    }

    @ReactMethod
    fun selectPhoto(promise: Promise) {
        this.promise = promise

        var intent = Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI)
        currentActivity?.startActivityForResult(intent, PICK_IMAGE_REQUEST)
    }

    fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == PICK_IMAGE_REQUEST && resultCode == Activity.RESULT_OK) {
            if (data != null && data.data != null) {
                val selectedImageUri: Uri? = data.data
                val imageUrl = selectedImageUri.toString()

                var projection = arrayOf(MediaStore.Images.Media.DISPLAY_NAME, MediaStore.Images.Media.MIME_TYPE, MediaStore.Images.Media.WIDTH, MediaStore.Images.Media.HEIGHT)
                var cursor = currentActivity?.contentResolver?.query(selectedImageUri!!, projection, null, null, null)

                if(cursor != null && cursor.moveToFirst()) {
                    var nameIndex = cursor.getColumnIndex(MediaStore.Images.Media.DISPLAY_NAME)
                    var typeIndex = cursor.getColumnIndex(MediaStore.Images.Media.MIME_TYPE)
                    var widthIndex = cursor.getColumnIndex(MediaStore.Images.Media.WIDTH)
                    var heightIndex = cursor.getColumnIndex(MediaStore.Images.Media.HEIGHT)

                    var name = cursor.getString(nameIndex) ?: "unknown"
                    var type = cursor.getString(typeIndex) ?: "unknown"
                    var width = cursor.getString(widthIndex) ?: "0"
                    var height = cursor.getString(heightIndex) ?: "0"

                    cursor.close()

                    var response = Arguments.createMap()

                    response.putString("name", name)
                    response.putString("type", type)
                    response.putString("width", width)
                    response.putString("height", height)
                    response.putString("url", imageUrl)

                    promise?.resolve(response)
                }
                // Send the image URL back to JavaScript
                
            } else {
                promise?.reject("E_PICKER_ERROR", "Image not selected")
            }
        }
    }

    override fun initialize() {
        super.initialize()
        reactApplicationContext.addActivityEventListener(object : BaseActivityEventListener() {
            override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
                this@AndroidPhotoPicker.onActivityResult(requestCode, resultCode, data)
            }
        })
    }
}