import axios from 'axios'
import type { ProductInterface } from '../type/Product.interface'

export const useUpdate = (url: string) => {
  const update = async (data: Partial<ProductInterface>) => {
    try {
      const response = await axios.put(`${url}/${data.id}`, data)
      return response.data
    } catch (error) {
      console.log(`Error updating product: ${(error as Error).message}`)
      throw new Error(`Failed to update product`)
    }
  }

  return { update }
}