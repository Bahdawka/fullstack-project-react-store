import { useCallback, useEffect, useRef, useState } from 'react'
import { API_ITEMS_PER_PAGE_LIMIT, createUrl } from '../../utils/mockapi'
import Product from '../products/Product'
import AddProduct from '../products/AddProduct'
import { debounce } from '../../utils/debounce'
import { Order_LIST, SORT_BY_LIST } from '../../data/mockData'
import { MdRefresh } from 'react-icons/md'
import SelectField from '../form/SelectField'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts, selectProducts, selectProductsError, selectProductsLoading, selectProductsTotalCount } from '../../redux/slices/productsSlice'
import type { AppDispatch } from '../../redux/store'
import { selectIsLoggedIn } from '../../redux/slices/authSlice'
import Loading from '../../ui/Loading'
import Pagination from '../products/Pagination'

const Products = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [sort, setSort] = useState('')
  const [order, setOrder] = useState('asc')

  const inputRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch<AppDispatch>()

  const products = useSelector(selectProducts)
  const totalProducts = useSelector(selectProductsTotalCount)
  const isLoading = useSelector(selectProductsLoading)
  const error = useSelector(selectProductsError)
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const totalPages = Math.ceil(totalProducts / API_ITEMS_PER_PAGE_LIMIT)

  const refreshProducts = useCallback(() => {
    dispatch(fetchAllProducts(createUrl(page, name, sort, order)))
  }, [dispatch, page, name, sort, order])

  useEffect(() => {
    refreshProducts()
  }, [refreshProducts])

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

      {isLoading && <Loading />}
      {error && <h2 className="error">{error}</h2>}
      {!isLoading && !error && (
        <div className="content">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
          <div className="buttons-group">
            {isLoggedIn && <AddProduct />}
          </div>
          {products.length > 0 ? (
            <ul className="products-list">
              {products.map((product) => (
                <Product key={product.id} product={product}
                  reload={refreshProducts}
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