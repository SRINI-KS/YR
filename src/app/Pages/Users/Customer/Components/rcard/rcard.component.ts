import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';
import { Request } from '../../Models/request';
@Component({
  selector: 'app-rcard',
  templateUrl: './rcard.component.html',
  styleUrls: ['./rcard.component.css'],
})
export class RCardComponent implements OnInit {
  swiperModules = [IonicSlides];
  request: Request = {
    serviceDetails: {
      serviceName: '',

      category: '',
      subCategory: '',
      discription: '',
      customIssiue: [],
    },
    workLocation: '',
    appointmentDate: new Date(),
  };
  constructor() {}

  ngOnInit() {
    console.log(this.request);
  }
}
