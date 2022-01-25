export type Item = {
  name: string
  img: string
  overlay: string
}

export interface IVendor {
  name: string
  items: Item[]
}

export interface IMapVendor {
  map: string
}

export type Vendors = {
  trials: IVendor & IMapVendor
  raid: IVendor
  gm: IVendor & IMapVendor
}

export type Week = {
  date: string
  vendors: Vendors
}
