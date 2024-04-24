import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }
  takePhoto(){
    const capturedPhoto =  Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
 
}
