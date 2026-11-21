import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({ id, image, name, price, category }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      className="group block min-w-0 text-[#453b47]"
      to={`/product/${id}`}
      aria-label={`View ${name}`}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-[#f7f1eb]">
        <img
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
          src={image?.[0]}
          alt={name}
          loading="lazy"
        />
        {category && (
          <span className="absolute left-3 top-3 rounded-full bg-[#fffaf2]/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#775c80] backdrop-blur-sm">
            {category}
          </span>
        )}
      </div>
      <div className="px-1 pt-3">
        <p className="line-clamp-2 min-h-10 text-[13px] leading-5 text-[#514751] transition-colors group-hover:text-[#775c80] sm:text-sm">
          {name}
        </p>
        <p className="mt-1.5 text-sm font-semibold tracking-wide text-[#332a35]">
          {currency}{price.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}

export default ProductItem
