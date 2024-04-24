import { Request } from '../../../../../Models/request';
import { ServiceDetails } from '../../../../../Models/service';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

import { ActivatedRoute } from '@angular/router';
import { CommanService } from 'src/app/Services/Comman/comman.service';
import { CameraService } from 'src/app/Services/Camera/camera.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-rcard',
  templateUrl: './rcard.component.html',
  styleUrls: ['./rcard.component.css'],
})
export class RCardComponent implements OnInit {
  swiperModules = [IonicSlides];
  latitude: any;
  longitude: any;
  selectedDate!: string;
  minDate: string;
  maxDate: string;

  params: string = ''; //store the router value

  ServiceDetails!: ServiceDetails[]; //store the service details from the comman service
  subCategory!: string[];
  category: any;

  serviceForm: Request = {
    name: '',
    mobileNumber: '',
    workLocation: {},
    appointmentDate: new Date(),

    serviceName: '',
    discription: '',
    category: [],
    subCategory: {},
    customIssiue: [],
    images: [],
  };

  constructor(
    private route: ActivatedRoute,
    private services: CommanService,
    public photoService: CameraService
  ) {
    this.route.params.subscribe((params) => {
      this.params = params['category'];
    });

    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 10); // Calculate the date 7 days from now

    this.minDate = today.toISOString();
    this.maxDate = nextWeek.toISOString();
  }

  ngOnInit() {
    this.getServicesDetails();
    this.setServiceFormData();
    console.log(this.latitude, 'sdf');
    console.log(this.serviceForm, 'service Form');
  }
  getServicesDetails() {
    this.ServiceDetails = this.services.getServicesDetails(this.params);
    console.log(this.ServiceDetails);
  }
  setServiceFormData() {
    this.serviceForm.serviceName = this.ServiceDetails[0].serviceName;
  }

  change(event: Event) {
    const value = event.target as HTMLInputElement;
    this.getSubcategory(value.value);
  }
  getSubcategory(category: string) {
    let serviceDetails = this.ServiceDetails[0];
    this.subCategory = serviceDetails.subCategory[category];
    console.log(this.subCategory, 'subcategory');
  }
  display() {
    console.log(this.serviceForm);
  }

  takePhoto() {
    this.photoService.takePhoto();
  }

  getCoordinates() {
    Geolocation.getCurrentPosition()
      .then((resp) => {
        const latitude = resp.coords.latitude;
        this.latitude = latitude;
        const longitude = resp.coords.longitude;
        this.longitude = longitude;
        this.serviceForm.workLocation=resp.coords
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        console.log(resp.coords)

      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }
}
