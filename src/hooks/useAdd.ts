import axios from 'axios'
import type { ProductInterface } from '../type/Product.interface'

export const useAdd = (url: string) => {
  const add = async (data: Partial<ProductInterface>) => {
    try {
      const response = await axios.post(url, data)
      return response.data
    } catch (error) {
      console.log(`Error adding product: ${(error as Error).message}`)
      throw new Error(`Failed to add product`)
    }
  }

  return { add }
}