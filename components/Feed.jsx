"use client"
import React from 'react'
import { useState,useEffect } from 'react';

import PromptCard from './PromptCard';
import { set } from 'mongoose';

const PromptCardList = ({data , handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout">
        {data.map((prompt,index) => (
          <PromptCard 
            key={index}
            post={prompt}
            handleTagClick={handleTagClick}

          />
        ))}

    </div>
  )
}

const Feed = () => {

    const [searchText, setsearchState] = useState("");
    const [posts, setposts] = useState([]);

    const handleSearchChange = (e) => {

    };
    useEffect(()=>{
      const fetchData = async ()=>{
        const response = await fetch('/api/prompt');
        const data = await response.json();
        setposts(data);

      }
      fetchData();

    },[]);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" placeholder='Search for a tag or a prompt' 
        value={searchText}
        onChange={handleSearchChange}
        required className="search_input peer "/>

      </form>

      <PromptCardList 
        data={[posts]}
        handleTagClick={()=>{}}
      />
      
    </section>
  )
}

export default Feed