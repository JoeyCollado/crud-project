import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Link href="/route/workspace"><button className='bg-blue-500 py-1 px-2 rounded-md cursor-pointer'>Get Started</button></Link>
    </div>
  )
}

export default page
