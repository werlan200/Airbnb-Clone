export type SmallCardType = {
  img: string;
  location: string;
  distance: string;
};

export type MediumCardType = {
  img: string;
  title: string;
};

export type LargeCardType = {
  img: string;
  title: string;
  description: string;
  btnText: string;
};

export interface SearchResult {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}
