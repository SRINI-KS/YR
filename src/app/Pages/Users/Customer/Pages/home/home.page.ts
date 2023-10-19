import { Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';
import { serviceList } from '../../../../../../Models/service';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit,AfterViewInit {
  serviceList = serviceList;
  serviceCatogory = [
    {
      category: serviceList[0],
      image: '../../../../../../assets/illustratioin/download.jpeg',
      link: './rCard',
    },
    {
      category: serviceList[1],
      image: '../../../../../../assets/illustratioin/download.png',
      link: './rCard',
    },
    {
      category: serviceList[2],
      image: '../../../../../../assets/illustratioin/images.png',
      link: './rCard',
    },
    {
      category: serviceList[3],
      image:
        '../../../../../../assets/illustratioin/istockphoto-1279763976-612x612.webp',
      link: './rCard',
    },
    {
      category: serviceList[4],
      image: '../../../../../../assets/illustratioin/images.png',
      link: './rCard',
    },

    {
      category: serviceList[5],
      image: '../../../../../../assets/illustratioin/images.png',
      link: './rCard',
    },

    {
      category: serviceList[6],
      image: '../../../../../../assets/illustratioin/images.png',
      link: './rCard',
    },

    {
      category: serviceList[7],
      image: '../../../../../../assets/illustratioin/images.png',
      link: './rCard',
    },
    {
      category: serviceList[8],
      image: '../../../../../../assets/illustratioin/images.png',
      link: './rCard',
    },
    {
      category: serviceList[9],
      image: '../../../../../../assets/illustratioin/images.png',
      link: './rCard',
    },
  ];
   
  constructor( private router:Router) {}
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
// this.router.navigateByUrl('customer/t/home/rCard')
this.router.navigate(['customer/t/home/rCard','Mechanic'])
  }

  
}
