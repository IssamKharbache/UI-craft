import React from 'react'
import { MdDynamicFeed } from "react-icons/md";

const features = [
    {
        id:1,
        name:"Dynamic Component Library",
        icon:MdDynamicFeed,
        description:"Our extensive library offers a wide range of ready-to-use React components designed for various applications. Whether you need simple UI elements or complex interactive features, you'll find components that are customizable and optimized for performance. Browse by category, filter by functionality, and find the perfect match for your project"
    },
    {
        id:2,
        name:"Dynamic Component Library",
        icon:MdDynamicFeed,
        description:"Our extensive library offers a wide range of ready-to-use React components designed for various applications. Whether you need simple UI elements or complex interactive features, you'll find components that are customizable and optimized for performance. Browse by category, filter by functionality, and find the perfect match for your project"
    },
    
    {
        id:3,
        name:"Dynamic Component Library",
        icon:MdDynamicFeed,
        description:"Our extensive library offers a wide range of ready-to-use React components designed for various applications. Whether you need simple UI elements or complex interactive features, you'll find components that are customizable and optimized for performance. Browse by category, filter by functionality, and find the perfect match for your project"
    },
    
    
]
const Features = () => {
  return (
    <section className='features-section py-12 bg-slat-50 mt-12'>
        <div className="mx-auto">
            <h2 className='text-2xl font-bold text-center'>UI craft features</h2>
        </div>

    </section>
  )
}

export default Features