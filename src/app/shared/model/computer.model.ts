import { Company } from './company.model';


export class Recipe {
  id: number;
  name: string;
  introduced: Date;
  discontinued: Date;
  company: Company[];
  companyId: number;

}
