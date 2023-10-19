import { FileHandle } from './file-handle.model';

export interface Request {
  serviceName: string;
  image: FileHandle[];
  category: string[];
  subCategory: Record<string,string[]>;
  discription: string;
  customIssiue: string[];

  name: string;
  mobileNumber: string;
  workLocation: string;
  appointmentDate: Date;
}

