import React from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const { products } = React.useContext(ShopContext)
  const bestSellers = products.filter((item) => item.bestseller).slice(0, 5)

  return (
    <section className="pb-16 pt-6 sm:pb-20 sm:pt-8">
      <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
        <div>
          <Title variant="editorial" Text1="Customer favorites" Text2="BEST SELLERS" />
          <p className="mt-3 max-w-lg text-xs leading-5 text-[#786d76] sm:text-sm sm:leading-6">
            The pieces our community keeps coming back for.
          </p>
        </div>
        <Link
          to="/collection"
          className="mb-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#e8dce6] px-4 py-2.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#65536e] transition hover:border-[#9b79b9] hover:bg-[#fbf5fa] sm:px-5 sm:text-[10px]"
        >
          View all <span className="text-sm" aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-9 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-6">
        {bestSellers.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            category={item.subCategory}
          />
        ))}
      </div>
    </section>
  )
}

export default BestSeller
