import Image from 'next/image'
import Stripe from 'stripe'
import ProductsCard from '../ProductsCard'

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: '2020-08-27'
  })

  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

export default async function Home() {
  const products = await getStripeProducts()
  console.log(products)
  return (
    <div className='p-4 flex flex-col'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 max-w-[1000px] w-full mx-auto gap-6'>
        {products.map((product, productIndex) => {
          return (
            <ProductsCard key={productIndex} product={product} />
          )
        })}
      </div>
    </div>
  )
}
