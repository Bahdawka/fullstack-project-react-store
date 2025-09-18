import { useState, type FormEvent } from 'react'
import type { ProductInterface } from '../../type/Product.interface'
import { PRODUCT_CATEGORIES } from '../../data/mockData'
import InputField from './InputField'
import SelectField from './SelectField'

interface ProductFormProps {
  onSubmit: (product: Partial<ProductInterface>) => void
  product: Partial<ProductInterface>
}

const ProductForm = ({ onSubmit, product }: ProductFormProps) => {
  const [name, setName] = useState(product.name as string)
  const [description, setDescription] = useState(product.description as string)
  const [price, setPrice] = useState(product.price as string)
  const [category, setCategory] = useState(product.category as string)
  const [image, setImage] = useState(product.image as string)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const returnProduct: Partial<ProductInterface> = {
      name,
      description,
      price,
      category,
      image
    }

    if (product.id) {
      returnProduct.id = product.id
    }

    onSubmit(returnProduct)
    setName('')
    setDescription('')
    setPrice('')
    setCategory('')
    setImage('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="name"
        value={name}
        label="Name"
        placeholder="Product name..."
        required
        onChangeInput={(e) => setName(e.target.value)}
      />
      <InputField
        id="description"
        value={description}
        label="Description"
        placeholder="Product description..."
        textarea
        onChangeTextArea={(e) => setDescription(e.target.value)}
      />
      <InputField
        id="price"
        value={price}
        label="Price"
        placeholder="Product price..."
        required
        onChangeInput={(e) => setPrice(e.target.value)}
      />
      <InputField
        id="image"
        value={image}
        label="Image"
        placeholder="Product image..."
        required
        onChangeInput={(e) => setImage(e.target.value)}
      />
      <SelectField
        id="category"
        value={category}
        label="Category"
        required
        options={PRODUCT_CATEGORIES.map((category) => ({ value: category, text: category }))}
        onChangeSelect={(e) => setCategory(e.target.value)}
      />

      <div className="form-group">
        <button className="form-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default ProductForm