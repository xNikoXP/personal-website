import React from "react";
import Link from "next/link";
import Image from 'next/image';
import "../globals.css";

export const metadata = {
    title: 'Niko\'s Personal Website',
    description: 'Welcome to Niko\'s personal website where I share my projects, blog posts, and more about myself.',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({
    children,
} : Readonly<{
    children : React.ReactNode
}>){
    return(
       <html lang="en">
            <body className="m-0 p-0">
                <header className="bg-[#8B7C99] shadow-[0_10px_50px_5px] overflow-x-auto sticky top-0">
                  <Nav/>
                </header>
                <main>{children}</main>
            </body>
       </html> 
    );
}

function Nav(){
  return(
      <div className="flex flex-row  justify-left min-w-[500px]">
        <div className="h-[100%] w-[25%] flex justify-left self-center" >
          <Image
            src="/logo.png"
            alt='Logo'
            width={1000}
            height={1000}
            className='w-[75px] h-[75] ml-[10%] '
          />
        </div>
        <div className="w-[75%] flex flex-row justify-end items-center mr-[1%] ">
          <Link href="/"><Button title="Home"/></Link>
          <Link href="/projects"><Button title="Projects"/></Link>
          <Link href="/blog"><Button title="Blog"/></Link>
          <Link href="/about"><Button title="About"/></Link>
        </div>
      </div>
  );
}

function Button({title=""}){
  const def = "w-[7dvw] min-w-[5rem] h-[2rem] mx-[1dvw] text-[#3a3440] text-[1em] cursor-pointer rounded-[3em] font-bold bg-white";
  const active = "active:bg-black active:text-white"

  return (
    <button className={`${def} ${active}`}>{title}</button>
  );
}