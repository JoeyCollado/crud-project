import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <Link href="/route/workspace"><button className='bg-blue-500 py-1 px-2 rounded-md cursor-pointer'>Get Started</button></Link>
    </div>
  )
}

export default page

//in a flex container or element to center something you need the height to contain viewpoert, items center for horizontal justify center for vertical
