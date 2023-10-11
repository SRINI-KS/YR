import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {
  serviceCatogory=[
    {category:"Carpenters",image:'../../../../../../assets/illustratioin/download.jpeg',link:'./rCard'},
    {category:"Mechanic",image:'../../../../../../assets/illustratioin/download.png',link:'./rCard'},
    {category:"Plumber",image:'../../../../../../assets/illustratioin/images.png',link:'./rCard'},
    {category:"Electrician",image:'../../../../../../assets/illustratioin/istockphoto-1279763976-612x612.webp',link:'./rCard'}

  ]
  constructor() {}
  ngOnInit(): void {
  
  }

  

}
