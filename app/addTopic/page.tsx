"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  //states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //
  const router = useRouter();

  //function, will be called when we click on submit button
  const handleSubmit = async (e) => {
    e.preventDefault(); //remove default behaviour which is refreshing the page once the button is clicked
    //input validation
    if (!title || !description) { //if any of these fields are empty or not present
      alert('Title and Description are required.');
      return; //else return 
    }

    //code to add to our database
    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/') //slash for homepage
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* get data from input fields then store it inside a state, adding interactivity to input fields */}
        <input
          onChange={(e) => setTitle(e.target.value)} //bind the input onchange attribute to the value
          value={title} //seting the value to the title state
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
        />

        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit cursor-pointer">
          Add Topic
        </button>
      </form>
    </>
  );
};

export default Page;
