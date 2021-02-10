import { Marker } from './types';

export interface MapProps {
  markers?: Marker[]
  onChildClick(hoverKey: any, childProps: any): void,
  onChildMouseEnter(hoverKey: any, childProps: any): void,
  onChildMouseLeave(hoverKey: any, childProps: any): void,
}