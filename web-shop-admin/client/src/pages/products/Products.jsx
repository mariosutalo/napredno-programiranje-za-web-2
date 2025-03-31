import React from 'react'
import useFetch from '../../hooks/useFetch'
import ProductsList from '../../components/productsList/productsList'


const Products = () => {

  const { data, error, isPending } = useFetch('http://localhost:3000/products')

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>error</p>}
      {data && <ProductsList products={data}/>}
    </div>
  )
}

export default Products