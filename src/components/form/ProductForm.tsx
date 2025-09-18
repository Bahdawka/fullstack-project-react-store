import { useState, type FormEvent } from 'react'
import type { ProductInterface } from '../../type/Product.interface'
import { INITIAL_PRODUCT, PRODUCT_CATEGORIES } from '../../data/mockData'

interface ProductFormProps {
  onSubmit: (product: Partial<ProductInterface>) => void
}

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [name, setName] = useState(INITIAL_PRODUCT.name)
  const [description, setDescription] = useState(INITIAL_PRODUCT.description)
  const [price, setPrice] = useState(INITIAL_PRODUCT.price)
  const [category, setCategory] = useState(INITIAL_PRODUCT.category)
  const [image, setImage] = useState(INITIAL_PRODUCT.image)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ name, description, price, category, image })
    setName('')
    setDescription('')
    setPrice('')
    setCategory('')
    setImage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name:</label>
        <input
          className="form-control"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="product name..."
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="description">Description:</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="product description..."
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="price">Price:</label>
        <input
          className="form-control"
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="product price..."
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="image">Image:</label>
        <input
          className="form-control"
          id="image"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="product image..."
          required
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="category">Category:</label>
        <select
          className="form-control"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Please select a category...</option>
          {PRODUCT_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <button className="form-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ProductForm