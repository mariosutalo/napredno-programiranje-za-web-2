import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductsList from '../../components/productsList/productsList'
import styles from './Products.module.css'

const Products = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const { data, error, isPending } = useFetch(`http://localhost:3000/products?product_name=${searchTerm}`)


  function handleSearchClicked() {
    setSearchTerm
  }

  return (
    <div>
      <div className={styles.search_div}>
        <input type="text" className={styles.search_products_input} value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
        <button className={styles.search_btn} onClick={handleSearchClicked}>
          <img className={styles.search_img} src="/public/images/search-icon.png" alt="" />
        </button>
      </div>
      {isPending && <p>Loading...</p>}
      {error && <p>error</p>}
      {data && <ProductsList products={data} />}
    </div>
  )
}

export default Products