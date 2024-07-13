"use client";

import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { set } from 'mongoose';

const PromptCard = ({post, handleTagCLick,handleEdit, handleDelete}) => {
  const [copy, setcopy] = useState("");

  const handleCopy = () => {
    setcopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setcopy("");
    }, 3000);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image src={post.creator.image} alt={"use_image"}
                height={40} width={40} className="rounded-full object-contain" />
                <div className="flex flex-col">
                      <h3 className="font_satoshi font-semibold text-gray-900">{post.creator.username}</h3>
                      <p className="font-inter text-sm text-gray-500\">{post.creator.email}</p>
                </div>
        </div>

        <div className="copy_btn" onClick={handleCopy()}>
            <Image src={copy=== post.prompt ? '/assests/icons/tick.svg' : '/assests/icons/copy.svg'} width={12} height={12} />

        </div>

      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer"
          onClick={()=> handleTagCLick && handleTagCLick(post.tag)}
      >{post.tag}</p>

    </div>
  )
}

export default PromptCard