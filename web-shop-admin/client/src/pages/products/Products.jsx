import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductsList from '../../components/productsList/productsList'

const Products = () => {

  const [url, setUrl] = useState('http://localhost:3000/products')
  const { data, error, isPending } = useFetch(url)

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>error</p>}
      {data && <ProductsList products={data} />}
      <button onClick={()=>setUrl('http://localhost:3000/products')}>Update search</button>
    </div>
  )
}

export default Products