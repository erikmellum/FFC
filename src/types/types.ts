export type Marker = {
  id: number;
  get: Function;
  showHint: boolean;
  lat: string;
  lng: string;
  title: string;
};

export interface mapProps {
  markers?: Marker[]
}