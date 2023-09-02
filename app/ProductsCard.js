'use client'

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import useCart from './(store)/store'


export default function ProductsCard(props) {
    const { product } = props
    const { id: price_id, unit_amount: cost, product: productInfo } = product
    const { name, description } = productInfo
    const router = useRouter()
    const setProduct = useCart(state => state.setProduct)



    function onProductClick() {
        const newProduct = {
            name,
            description,
            price_id,
            cost,
            productInfo
        }
        setProduct({ newProduct })
        router.push('/product?price_id=' + price_id)

    }
    return (
        <div onClick={onProductClick} className='flex flex-col shadow  hover:shadow-lg cursor-pointer bg-slate-900 '>
            <Image src={productInfo.images[0]} alt={name} className='object-cover bg-slate-900 h-full' width={250} height={400} />
            <div className='flex flex-col gap-2 p-4'>
                <div className="flex items-center justify-between text-white">
                    <h3>
                        {name}
                    </h3>
                    <p>${cost / 100}</p>

                </div>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}
