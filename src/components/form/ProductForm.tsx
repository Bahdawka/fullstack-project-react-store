import { useState, type FormEvent } from 'react'
import type { ProductInterface } from '../../type/Product.interface'
import { PRODUCT_CATEGORIES } from '../../data/mockData'


interface ProductFormProps {
  onSubmit: (product: ProductInterface) => void
}

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('https://picsum.photos/640/480?random=graphics')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({ id, name, description, price, category, image })
    setId(0)
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