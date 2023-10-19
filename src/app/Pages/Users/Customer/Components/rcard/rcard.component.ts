import { Request } from './../../../../../../Models/request';
import { ServiceDetails } from './../../../../../../Models/service';

import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { CommanService } from 'src/app/Services/Comman/comman.service';
@Component({
  selector: 'app-rcard',
  templateUrl: './rcard.component.html',
  styleUrls: ['./rcard.component.css'],
})
export class RCardComponent implements OnInit {
  swiperModules = [IonicSlides];

  params: string = ''; //store the router value
  
  ServiceDetails!: ServiceDetails[];  //store the service details from the comman service
  
  serviceForm: Request = {
    name: '',
    mobileNumber: '',
    workLocation: '',
    appointmentDate: new Date(),

    serviceName: '',
    discription: '',
    category: [],
    subCategory: {},
    customIssiue: [],
    image: []
  };

  constructor(private route: ActivatedRoute, private services: CommanService) {
    this.route.params.subscribe((params) => {
      this.params = params['category'];
    });
  }

  ngOnInit() {
    this.getServicesDetails();
    console.log(this.serviceForm, 'service FOrm');
  }
  getServicesDetails() {
    this.ServiceDetails = this.services.getServicesDetails(this.params);
    console.log(this.ServiceDetails);
  }
}
