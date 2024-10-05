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

                // Send the image URL back to JavaScript
                promise?.resolve(imageUrl)
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