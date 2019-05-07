import { Item } from './item.model';

export interface Budget extends Item {
  id: number;
  user: string;
  name: string;
  items: Item[];
  reference: string;
  lastModified: string;
}
