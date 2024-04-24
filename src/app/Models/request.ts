import { FileHandle } from './file-handle.model';

export interface Request {
  serviceName: string;
  images: FileHandle[];
  category: string[];
  subCategory: {};
  discription: string;
  customIssiue: string[];

  name: string;
  mobileNumber: string;
  workLocation: {};
  appointmentDate: Date;
}

