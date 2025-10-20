import { useState } from 'react'
import Modal from '../modals/Modal'
import ProductForm from '../form/ProductForm'
import type { ProductInterface } from '../../types/Product.interface'
import { useAdd } from '../../hooks/useAdd'
import { API_URL } from '../../utils/mockapi'
import { INITIAL_PRODUCT } from '../../data/mockData'

const AddProduct = () => {
  const [showModal, setShowModal] = useState(false)
  const { add } = useAdd(API_URL)

  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const handleSubmit = async (product: Partial<ProductInterface>) => {
    try {
      await add(product)
      handleClose()
    } catch (error) {
      console.error('Failed to add product:', error)
    }
  }

  return (
    <>
      <button className="add-product-btn" onClick={handleOpen}>Add Product</button>
      {showModal && (
        <Modal onClose={handleClose}>
          <h2 className="modal__title">Add Product</h2>
          <ProductForm onSubmit={handleSubmit} product={INITIAL_PRODUCT} />
        </Modal>
      )}
    </>
  )
}

export default AddProduct