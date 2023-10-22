import React from 'react'
import MemoizedProductList from '../components/categories/ProductList'


export interface ProductRating {
    rate: number
    count: number
}

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: ProductRating
}

const getProducts = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_APP_URL}products`)
        .then(res => res.json())
}

export const revalidate = 60

const Category = async () => {
    const products: Product[] = await getProducts()

    return (
        <div className='container mx-auto pt-10'>
            <MemoizedProductList products={products} />
        </div>
    )
}

export default Category
