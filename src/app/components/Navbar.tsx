import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link href="/" className='font-bold text-white'>FoolsCoding</Link>
      <Link href="/route/addTopic" className='bg-white p-2 rounded-sm'>Add Topic</Link>
    </nav>
  )
}

export default Navbar
