import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
// import ProductsList from '../../components/productsList/productsList'
import ProductsListV2 from '../../components/productsList/ProductsListV2'

const Products = () => {

  const { data, error, isPending } = useFetch('http://localhost:3000/products')

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>error</p>}
      {data && <ProductsListV2 products={data} isOnSale={true} />}
    </div>
  )
}

export default Products