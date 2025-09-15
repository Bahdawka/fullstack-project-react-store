import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from '../utils/mockapi'
import { type ProductInterface } from '../../type/Product.interface'
import Product from '../products/Product'

const Products = () => {
  const [page, setPage] = useState(1)
  const { data: products, isLoading, error } = useFetch<ProductInterface>(createUrl(page))

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div className="content">
          <div className="pagination">
            <button
              className="pagination__btn"
              disabled={page === 1} onClick={() => setPage(prev => prev - 1)}
            >Prev
            </button>
            <button
              className="pagination__btn"
              disabled={products.length < API_ITEMS_PER_PAGE_LIMIT}
              onClick={() => setPage(prev => prev + 1)}
            >Next
            </button>
          </div>
          <ul className="products-list">
            {products.length > 0 &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Products