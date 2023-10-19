import { Injectable } from '@angular/core';
import { ServiceDetails } from 'src/Models/service';

@Injectable({
  providedIn: 'root',
})
export class CommanService {
  constructor() {}

  services: ServiceDetails[] = [
    {
      serviceName: 'Mechanic',
      category: [
        'Bike Repair and Services',
        'Bus Mechanic',
        'Car Repairs & Services',
        'Lorry Mechanic',
        'Trucks Mechanic',
      ],
      subCategory: {
        'Bike Repair and Services': [
          'General Servicing',
          'Wheel Repair/Replacement',
        ],
        'Bus Mechanic': [
          'Bus Repair',
          'General Servicing',
          'Replacement of Tires',
        ],
        'Car Repairs & Services': [
          'Car General Servicing',
          'Car Interior Detailing',
          'Car Painting',
          ' Car Wash',
          ' Car Wheel Repair',
          'Dent Removal',
          'Tire Repair or Replacement',
          ' Windshield Wipers Replacement',
        ],
        'Lorry Mechanic': [
          'Accessory Fitting',
          'Brake Repair',
          ' Changing Oil',
          'Inspect Brake System',
          'Tighten Bolts & Screws',
          'Tires Replacement',
          'Wheel Bearing',
        ],
        'Trucks Mechanic': [
          'Accessory Fitting',
          'Battery Conditioning',
          'Brake Repair',
          'Changing Oil',
          'Inspect Brake System',
          'Replacement of Tires',
          'Tighten Bolts & Screws',
          'Wheel Bearings',
        ],
      },
      discription: '',
    },
    {
      serviceName: 'Carpentry',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Cleaning Services',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Construction',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Driver',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Electrician',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Electronics',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Painting',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Pest Control',
      category: [],
      subCategory: {},
      discription: '',
    },
    {
      serviceName: 'Plumbing',
      category: [],
      subCategory: {},
      discription: '',
    },
  ];

  getServicesDetails(byName: string) {
    return this.services.filter((ser) => ser.serviceName == byName);
  }
}
