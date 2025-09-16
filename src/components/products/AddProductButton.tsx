import { useState } from 'react'
import Modal from '../modals/Modal'
import ProductForm from '../form/ProductForm'
import type { ProductInterface } from '../../type/Product.interface'


const AddProductButton = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => setShowModal(true)

  const handleClose = () => setShowModal(false)

  const handleSubmit = (product: ProductInterface) => {
    console.log(product)
    handleClose()
  }

  return (
    <>
      <button className="add-product-btn" onClick={handleOpen}>Add Product</button>
      {showModal && (
        <Modal onClose={handleClose}>
          <h2 className="modal__title">Add Product</h2>
          <ProductForm onSubmit={handleSubmit} />
        </Modal>
      )}
    </>
  )
}

export default AddProductButton