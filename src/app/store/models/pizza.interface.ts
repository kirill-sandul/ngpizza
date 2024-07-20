export interface IPizzaSelected {
  type: number,
  size: number,
  price: number,
  count?: number
}

export interface Pizza {
  id: string,
  image_url: string,
  name: string,
  types: number[],
  sizes: number[],
  prices: {
    [size: string]: number
  },
  category: number,
  rating: number,
  selected: IPizzaSelected
}