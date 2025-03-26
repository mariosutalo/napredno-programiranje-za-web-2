import React from 'react'
import useFetch from '../../hooks/useFetch'

const Products = () => {

  const { data, error, isPending } = useFetch('http://localhost:3000/products')

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>error</p>}
      {data && <p>data.count</p>}
    </div>

  )
}

export default Products