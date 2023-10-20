import { Product } from '@/app/categories/page'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    product: Product
}

const Product = (props: Props) => {
    const { product } = props
    return (
        <Link href={`/products/${product?.id}`}>
            <div className='flex flex-col items-center justify-center'>
               <div className='w-full h-[250px] relative'>
               {product?.image && 
                    <Image src={product?.image} alt={product?.title} fill className='object-contain' sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
               }
                </div>
                <h1 className='text-center text-xl font-semibold text-gray-500'>{product?.title}</h1>
                <p className='text-center text-gray-400'>${product?.price}</p>
            </div>
        </Link>
    )
}

export default Product