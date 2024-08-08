import React from 'react'
import Button from '../buttons/Button'

const CTASection = () => {
  return (
    <div className='flex flex-col mx-16 items-center mt-[120px] gap-6'>
        <h2 className='font-bold text-2xl text-center'>Build and Manage Your React Components</h2>
      <p className='text-center text-[15px] w-[510px] max-sm:w-full text-slate-500'> Simplify the process of building and acquiring React components to streamline your development workflow. Whether you’re a seasoned developer or just starting with React, our platform provides a rich library of pre-built, customizable components and a powerful toolset for creating your own</p>
      <Button label="Let's get started" />
    </div>
  )
}

export default CTASection