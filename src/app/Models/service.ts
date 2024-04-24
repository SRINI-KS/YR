import { FileHandle } from "./file-handle.model";

export interface ServiceDetails{
  serviceName: string;
  image?: FileHandle[];
  category: string[];
  subCategory: Record<string,string[]>;
  discription: string;
}
// const serviceList: string[] = [
//   'Mechanic',

//   'Carpentry',


//   'Cleaning Services',

//   'Construction',

//   'Driver',

//   'Electrician',

//   'Electronics',

//   'Painting',

//   'Pest Control',

//   'Plumbing',
// ];

// export {serviceList};
const serviceCatogory = [
  {
    category: 'Mechanic',
    image: '../../../../../../assets/service-illustration/mechanic.jpg',
    link: './rCard',
  },
  {
    category: 'Carpentry' ,
    image: '../../../../../../assets/service-illustration/carpentry.jpg',
    link: './rCard',
  },
  {
    category: 'Cleaning Services',
    image: '../../../../../../assets/service-illustration/cleaning service.jpg',
    link: './rCard',
  },
  {
    category: 'Construction',
    image: '../../../../../../assets/service-illustration/construction.jpg',
    link: './rCard',
  },
  {
    category:'Driver',
    image: '../../../../../../assets/service-illustration/driver.jpg',
    link: './rCard',
  },

  {
    category:  'Electrician',
    image: '../../../../../../assets/service-illustration/electrician.jpg',
    link: './rCard',
  },

  {
    category:  'Painting',
    image: '../../../../../../assets/service-illustration/painter.jpg',
    link: './rCard',
  },

  {
    category: 'Pest Control',
    image: '../../../../../../assets/service-illustration/pest controll.jpg',
    link: './rCard',
  },
  {
    category:  'Plumbing',
    image: '../../../../../../assets/service-illustration/plumbing.jpg',
    link: './rCard',
  },
  {
    category: 'Electronics',
    image: '../../../../../../assets/service-illustration/electronics.jpg',
    link: './rCard',
  },

];

export {serviceCatogory}