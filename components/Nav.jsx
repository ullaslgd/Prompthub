"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession,getProviders } from 'next-auth/react';

const Nav = () => {

  const {data: session} = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleMenu, settoggleMenu] = useState(false)

  useEffect(() => {
    const setUpProviders = async ()=> {
      const response = await getProviders();

      setProviders(response);
    }
    setUpProviders();
  
  },[]);

  return (
    <nav className="flex-between w-full mb-16 pt-3 " >
      <Link href="/" className="flex gap-2 flex-center "> 
      <Image src="/assets/images/robot.png" alt="logo" width={45} height={45} className="object-contain" />
      <p className="logo_text">Prompthub</p>
      </Link>



      <div className="sm:flex hidden">
        {session?.user ?(
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
            Create Prompt
            </Link>
            <button type="button" onClick={signOut} className="outline_btn"> 
               Sign Out

            </button>
            <Link href="profile">
            <Image 
            src={session?.user.image}
            height={37}
            width={37}
            className="rounded-full "
            alt="profile"
              /> 
            
            
            </Link>


          </div>
        ):(
          <>
          {providers &&
          Object.values(providers).map((provider)=>(
            <button type="button"
            key={provider.name}
            onClick={()=>signIn(provider.id)}
            className="black_btn"> 
            Sign In

            </button>
          ))}
           
          </>
        )}


      </div>

      <div className="sm:hidden flex relative">
        {session?.user ?(
          <div className="flex">
            <Image 
            src={session?.user.image}
            height={37}
            width={37}
            className="rounded-full "
            alt="profile"
            onClick={()=>settoggleMenu((prev)=>!prev)}
              /> 

          {toggleMenu && (
            <div className="dropdown">
              <Link href="/profile" className="dropdown_item" onClick={()=>settoggleMenu(false)}>Profile</Link>
              <Link href="/create-prompt" className="dropdown_item" onClick={()=>settoggleMenu(false)}>Create Prompt</Link>
              <button type="button" onClick={()=>{signOut();settoggleMenu(false);}} className="mt-5 w-full black_btn">Sign Out</button>
            </div>
          )}


          </div>
        ) :(
          <>
          {providers &&
          Object.values(providers).map((provider)=>(
            <button type="button"
            key={provider.name}
            onClick={()=>signIn(provider.id)}
            className="black_btn"> 
            Sign In

            </button>
          ))}
           
          </>
        )}

      </div>

    </nav>
  )
}

export default Nav