import { FileHandle } from './file-handle.model';

export interface Service {
  serviceName: string;
  image?: FileHandle[];

  category: string;
  subCategory: string;
  discription: string;
  customIssiue: string[];
}
