
export interface Floorplan {
  active?: boolean;              //is active inventory
  basePrice?: number;
  bathrooms?: number;
  bedrooms?: number;
  createdbyuser?: string;
  datecreated?: string;
  datemodified?: string;
  debutdate?: string;
  floorplanCaption?: string | null;
  floorplanDescription?: string | null; 
  floorplanId?: number;
  floorplanUrl?: string | null;
  // floorplanUrl?: HTMLImageElement;
  floors?: number;
  freightestimate?: number;
  length?: number;
  modelName: string;
  modifiedbyuser?: string;
  onDisplay?: boolean;           //display models
  pack?: number;
  seriesName: string;
  size?: number;                 //add sort when filter by size 
  stopbuilddate?: string;
  surcharge?: number;
  thumbnailUrl?: string;
  width?: number;
  mediaId?: string;
}
