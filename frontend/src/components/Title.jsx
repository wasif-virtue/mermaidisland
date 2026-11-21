import React from 'react'

const Title = ({ Text1, Text2, className = '', variant = 'default' }) => (
  variant === 'editorial' ? (
    <div className={`flex flex-col items-start ${className}`}>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a77b9e]">
        {Text1}
      </p>
      <h2 className="font-semibold text-2xl leading-tight tracking-[-0.035em] text-purple-600 sm:text-4xl">
        {Text2}
      </h2>
    </div>
  ) : (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <p className="font-semibold text-purple-500">
        {Text1} <span className="font-bold text-purple-700">{Text2}</span>
      </p>
      <span className="h-px w-8 bg-purple-700 sm:w-12 sm:h-0.5" />
    </div>
  )
)

export default Title
