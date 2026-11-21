import React from 'react'

const Title = ({Text1, Text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-purple-500 font-semibold'>{Text1} <span className='font-bold text-purple-700'>{Text2}</span></p>
      <p className='w-8 sm:w-12 h-px sm:h-0.5 bg-purple-700'></p>
    </div>
  )
}

export default Title
