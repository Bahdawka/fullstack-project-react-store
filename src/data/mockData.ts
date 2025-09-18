import type { ProductInterface } from "../type/Product.interface"

export const PRODUCT_CATEGORIES: string[] = [
  'Laptops',
  'Desktops and All-in-Ones',
  'Graphics Cards',
  'Monitors',
  'Accessories and Peripherals'
]

export const INITIAL_PRODUCT: Partial<ProductInterface> = {
  id: 999,
  name: 'AMD Radeon RX 7800 XT Graphics Card',
  category: 'Graphics Cards',
  price: 999,
  description: 'AMD Radeon RX 7800 XT Graphics Card',
  image: 'https://picsum.photos/640/480?random=graphics',
}