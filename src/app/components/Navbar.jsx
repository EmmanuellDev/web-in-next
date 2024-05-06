import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-600 dark:border-b-orange-100 dark:border-y-2 dark:border-t-orange-100 bg-orange-100 border-b-black border-y-2 border-t-black p-4 lg:text-lg justify-center gap-4'>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
