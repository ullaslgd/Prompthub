'use client';

import { useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {

  const Router=useRouter();
  const {data:session}=useSession();
  const [submitting, setsubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const CreatePrompt = async(e)=>{
    e.preventDefault();
    setsubmitting(true);
    try {
       const response = await fetch ('/api/prompt/new',{
        method: 'POST',
        body : JSON.stringify({
          prompt:post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        })


       })
       if(response.ok){
        Router.push('/');
       }
    } catch (error) {
      console.log(error);
    }finally{}
    setsubmitting(false);
  }
  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handlesubmit={CreatePrompt}
    />
  )
}

export default CreatePrompt