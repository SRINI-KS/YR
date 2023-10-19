import { FileHandle } from "./file-handle.model";

export interface ServiceDetails{
  serviceName: string;
  image?: FileHandle[];
  category: string[];
  subCategory: Record<string,string[]>;
  discription: string;
}
const serviceList: string[] = [
  'Mechanic',

  'Carpentry',


  'Cleaning Services',

  'Construction',

  'Driver',

  'Electrician',

  'Electronics',

  'Painting',

  'Pest Control',

  'Plumbing',
];

export {serviceList};