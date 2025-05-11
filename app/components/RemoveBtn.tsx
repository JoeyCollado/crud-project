"use client"

import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'
import { useRouter } from 'next/navigation'

const RemoveBtn = ({id}) => { //get id from props

  const router = useRouter();

  const removeTopic = async() => { //create function to remove topic
    const confirmed = confirm("Are you sure?") //ask for confirmation

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, { //get id from api endpoint
        method: "DELETE", //set method to delete
      })

      if(res.ok){ // so that when we delete it will automatically refresh
        router.refresh();
      }
   
    }
  }

  return (
    <button onClick={removeTopic} className='text-red-500 cursor-pointer' title='remove'>
        <HiOutlineTrash size={24}/>
    </button>
  )
}

export default RemoveBtn
