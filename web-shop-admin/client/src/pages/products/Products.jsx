import React from 'react'
import useFetch from '../../hooks/useFetch'
import ProductsList from '../../components/productsList/productsList'
<<<<<<< HEAD
import styles from './Products.module.css'
=======

>>>>>>> 4e03ba2606a9182320d6487e09d601034d143ad5

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
<<<<<<< HEAD
      {data && <ProductsList products={data} />}
=======
      {data && <ProductsList products={data}/>}
>>>>>>> 4e03ba2606a9182320d6487e09d601034d143ad5
    </div>
  )
}

export default Products