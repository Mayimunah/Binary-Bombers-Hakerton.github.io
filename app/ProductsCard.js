import Image from 'next/image'
import React from 'react'

export default function ProductsCard(props) {
    const { product } = props
    const { id: price_id, unit_amount: cost, product: productInfo } = product
    const { name, description } = productInfo
    return (
        <div className='flex flex-col shadow  hover:shadow-lg cursor-pointer bg-slate-900 '>
            <Image src={productInfo.images[0]} alt={name} className='object-cover bg-slate-900 h-full' width={250} height={400} />
            <div className='flex flex-col gap-2 p-4'>
                <div className="flex items-center justify-between text-white">
                    <h3>
                        {name}
                    </h3>
                    <p>${cost/100 }</p>
                </div>

            </div>
        </div>
    )
}
