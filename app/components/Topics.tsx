import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'


//fetching topics
const getTopics = async() => {
  try{
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: "no-store",
    }) //api endpoint

    if(!res.ok){
      throw new Error('Failed to fetch topics')
    }

    return res.json();
  }catch(error){
    console.log("Error loading topics", error);

  }
}

const Topics = async () => {

  const {topics} = await getTopics();
  
  return (
    <>
    {topics.map((t) => (
      <div
        key={t._id}
        className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
      >
        <div>
          <h2 className="font-bold text-2xl">{t.title}</h2> {/* not harcoded anymore */}
          <div>{t.description}</div> {/* not harcoded anymore */}
        </div>

        <div className="flex gap-2">
          <RemoveBtn id={t._id} />
          <Link href={`/editTopic/${t._id}`}> {/* get id */}
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    ))}
  </>
  )
}

export default Topics
