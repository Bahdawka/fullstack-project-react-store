import { useState, type ReactNode } from 'react'
import type { ProductInterface } from '../../type/Product.interface'
import { useUpdate } from '../../hooks/useUpdate'
import { API_URL } from '../../utils/mockapi'
import Modal from '../modals/Modal'
import ProductForm from '../form/ProductForm'

interface EditProductProps {
  children: ReactNode
  product: ProductInterface
  reload: () => void
}

const EditProduct = ({ children, product, reload }: EditProductProps) => {
  const [showModal, setShowModal] = useState(false)
  const { update } = useUpdate(API_URL)

  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)

  const handleSubmit = async (product: Partial<ProductInterface>) => {
    try {
      const updateProduct = await update(product)
      console.log(updateProduct)
      handleClose()
      reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button className="product-item__edit" onClick={handleOpen}>{children}</button>
      {showModal && (
        <Modal onClose={handleClose}>
          <h2 className="modal__title">Edit Product №{product.id}, {product.name}</h2>
          <ProductForm onSubmit={handleSubmit} product={product} />
        </Modal>
      )}
    </>
  )
}

export default EditProduct