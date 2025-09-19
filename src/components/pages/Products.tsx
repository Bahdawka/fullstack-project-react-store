import { useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from '../../utils/mockapi'
import { type ProductInterface } from '../../types/Product.interface'
import Product from '../products/Product'
import AddProduct from '../products/AddProduct'
import { debounce } from '../../utils/debounce'
import { Order_LIST, SORT_BY_LIST } from '../../data/mockData'
import { MdRefresh } from 'react-icons/md'
import SelectField from '../form/SelectField'

const Products = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')
  const [reload, setReload] = useState('0')

  const inputRef = useRef<HTMLInputElement>(null)

  const { data: products, isLoading, error } =
    useFetch<ProductInterface>(createUrl(page, name, sort, order), undefined, reload)
  const debounceSetName = debounce(setName, 1000)

  const resetFilters = () => {
    setName('')
    setSort('')
    setOrder('')
    setPage(1)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <h1>Products List</h1>

      <div className="products-filter">
        <div className="form-group">
          <label className="form-label" htmlFor="filter">Filter by name</label>
          <input
            className="form-control"
            ref={inputRef}
            id="filter"
            type="text"
            placeholder="Filter products by name..."
            onChange={(e) => debounceSetName(e.target.value)}
          />
        </div>
        <SelectField
          id="sort"
          value={sort}
          label="Sort by"
          options={SORT_BY_LIST}
          onChangeSelect={(e) => setSort(e.target.value)}
        />
        <SelectField
          id="order"
          value={order}
          label="Order"
          options={Order_LIST}
          onChangeSelect={(e) => setOrder(e.target.value)}
        />

        <button onClick={resetFilters}>
          <MdRefresh />
        </button>
      </div>

      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div className="content">
          <div className="buttons-group">
            <AddProduct />
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
          </div>
          {products.length > 0 ? (
            <ul className="products-list">
              {products.map((product) => (
                <Product key={product.id} product={product}
                  reload={() => setReload(product.id.toString())}
                />
              ))}
            </ul>
          ) : (
            <p className="products-empty">No products found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Products