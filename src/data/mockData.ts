import type { SelectOptionInterface } from '../types/Common'
import type { ProductInterface } from '../types/Product.interface'

export const PRODUCT_CATEGORIES: SelectOptionInterface[] = [
  {
    value: 'Laptops',
    text: 'Laptops'
  },
  {
    value: 'Desktops and All-in-Ones',
    text: 'Desktops and All-in-Ones'
  },
  {
    value: 'Graphics Cards',
    text: 'Graphics Cards'
  },
  {
    value: 'Monitors',
    text: 'Monitors'
  },
  {
    value: 'Accessories and Peripherals',
    text: 'Accessories and Peripherals'
  }
]

export const INITIAL_PRODUCT: Partial<ProductInterface> = {
  id: 999,
  name: 'AMD Radeon RX 7800 XT Graphics Card',
  category: 'Graphics Cards',
  price: 999,
  description: 'AMD Radeon RX 7800 XT Graphics Card',
  image: 'https://picsum.photos/640/480?random=graphics',
}

export const SORT_BY_LIST: SelectOptionInterface[] = [
  { value: '', text: 'Default order' },
  { value: 'name', text: 'Name' },
  { value: 'price', text: 'Price' },
  { value: 'category', text: 'Category' }
]

export const Order_LIST: SelectOptionInterface[] = [
  { value: 'asc', text: 'Ascending' },
  { value: 'desc', text: 'Descending' }
]