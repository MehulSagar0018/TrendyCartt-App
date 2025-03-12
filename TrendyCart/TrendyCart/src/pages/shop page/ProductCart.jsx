import React from 'react'

const ProductCart = ({products}) => {
    console.log(products)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 lg:grid-cols-4 gap-8'>
{products}
    </div>
  )
}

export default ProductCart
