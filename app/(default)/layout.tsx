import React from "react";
import Link from "next/link";
import Image from 'next/image';
import "../globals.css";

export const metadata = {
    title: 'Arvi\'s Personal Website',
    description: 'Welcome to Arvi\'s personal website where I share my projects, blog posts, and more about myself.',
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
       <html lang="en" className="text-[0.5dvw]">
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
      <div className="flex flex-row  justify-left">
        <div className="h-[100%] w-[25%] flex justify-left self-center" >
          <Image
            src="/logo.png"
            alt='Logo'
            width={1000}
            height={1000}
            className='w-[75px] h-[75] ml-[10%] '
          />
        </div>
        <div className="w-[75%] flex flex-row justify-end items-center mr-[2dvw] ">
          <Link href="/"><Button title="Home"/></Link>
          <Link href="/projects"><Button title="Projects"/></Link>
          <Link href="/blog"><Button title="Blog"/></Link>
          <Link href="/about"><Button title="About"/></Link>
        </div>
      </div>
  );
}

function Button({title=""}){
  const def = "w-[10dvw] h-[6rem] mx-[1dvw] text-[#3a3440] text-[3em] cursor-pointer rounded-[3rem] font-bold bg-white";
  const active = "active:bg-black active:text-white"

  return (
    <button className={`${def} ${active}`}>{title}</button>
  );
}