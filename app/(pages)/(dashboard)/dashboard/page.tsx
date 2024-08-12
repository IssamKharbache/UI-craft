import AllProjects from '@/components/dashboard/main/AllProjects'
import Cards from '@/components/dashboard/main/Cards'
import FavoriteComponents from '@/components/dashboard/main/FavoriteComponents'
import React from 'react'

const DahboardPage = () => {
  return (
    <div>
      <Cards />
      <AllProjects />
      <FavoriteComponents />
    </div>
  )
}

export default DahboardPage