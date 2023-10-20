import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Product from './Product'

const ProductList = (props: any) => {
  const { products } = props

  return (
    <div>
      <h1 className='text-center font-bold text-3xl'>Products List</h1>
      <div className='grid grid-cols-4 gap-x-10 gap-y-10 mt-40'>
        {products?.map((product: any, index: number) => {
          return (
            <Product key={index} product={product} />
          )
        })}
      </div>
    </div>
  )
}

const MemoizedProductList = React.memo(ProductList);

export default MemoizedProductList