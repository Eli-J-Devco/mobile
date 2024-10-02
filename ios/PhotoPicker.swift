//
//  PhotoPicker.swift
//  NWPlatform
//
//  Created by quis on 27/09/2024.
//

import Foundation
import UIKit
import React
import Photos

@objc(PhotoPicker)
class PhotoPicker: NSObject, UIImagePickerControllerDelegate, UINavigationControllerDelegate {
  var resolve: RCTPromiseResolveBlock?
  var reject: RCTPromiseRejectBlock?
  
  @objc
  func selectPhoto(_ resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock){
    self.resolve = resolve
    self.reject = reject
    
    DispatchQueue.main.async {
      let picker = UIImagePickerController()
      picker.sourceType = .photoLibrary
      picker.delegate = self
      picker.allowsEditing = false
      
      if let scene = UIApplication.shared.connectedScenes.first as? UIWindowScene {
          if let rootViewController = scene.windows.first?.rootViewController {
              rootViewController.present(picker, animated: true, completion: nil)
          }
      }
    }
  }
  
  func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]){
    picker.dismiss(animated: true, completion: nil)
    
    if let imageUrl = info[.imageURL] as? URL, let image = info[.originalImage] as? UIImage {
      
      let imageFormat = imageUrl.pathExtension
      let name = imageUrl.lastPathComponent
      let imageSize = image.size
      
      let response: [String: Any] = [
        "name": name,
        "type": imageFormat,
        "width": imageSize.width,
        "heigth": imageSize.height,
        "url": imageUrl.absoluteString
      ]
      
      
      self.resolve?(response)
    }else{
      self.reject?("E_PHOTO_PICKER", "Photo not selected", nil)
    }
  }
  
  func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
    picker.dismiss(animated: true, completion: nil)
    self.reject?("E_PHOTO_PICKER_CANCELLED", "User cancelled photo picker", nil)
  }
  
}
