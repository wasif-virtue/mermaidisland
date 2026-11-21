import React from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const BestSeller = () => {

    const {products} = React.useContext(ShopContext);
    const [bestSeller, setBestSeller] = React.useState([]);

    React.useEffect(() => {
      const bestProduct = products.filter((item)=>(item.bestSeller));
      setBestSeller(bestProduct.slice(0, 5));  
    },[])

  return (
    <div className='my-10'>
      <div className='text-3xl text-center py-8'>
        <Title Text1={'BEST'} Text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our most popular products that customers love!
        </p>
      </div>
      
    </div>
  )
}

export default BestSeller
