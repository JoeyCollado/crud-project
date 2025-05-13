"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


const EditTopicForm = ({id, title, description}) => { //send topic id, title, and description here as props

  const [newTitle, setNewTitle] = useState(title); //newtitle = value, setNewTitle = onchange, binded to input
  const [newDescription, setNewDescription] = useState(description);
  
  const router = useRouter();

  //function for handling the submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify({newTitle,newDescription}),
      });

      if(!res.ok){
        throw new Error("Failed to update topic");
      }

      router.refresh(); //updates the data as soon as it gets updated
      router.push('/')
    }catch(error){
      console.log(error)
    }
   
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input value={newTitle} onChange={e => setNewTitle(e.target.value)} className="border border-slate-500 px-8 py-2" type='text' placeholder='Topic Title'></input>

        <input value={newDescription} onChange={e => setNewDescription(e.target.value)} className="border border-slate-500 px-8 py-2" type='text' placeholder='Topic Description'></input>

        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit cursor-pointer'>
            Update Topic
        </button>
    </form>
  )
}

export default EditTopicForm
