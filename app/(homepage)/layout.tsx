import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: 'Niko\'s Personal Website',
    description: 'Welcome to Niko\'s personal website where I share my projects, blog posts, and more about myself.',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function HomeLayout({
    children, 
} : Readonly<{
    children: React.ReactNode
}>) {
    return(
        <html lang="en" className='text-[0.5dvw]'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased m-0 p-0 h-[100dvh]`} >
                <header className='pt-[2dvh] pb-[3dvh] max-h-[250px] max-w-[100dvw] bg-[#8B7C99] shadow-[0_1dvh_50px_5px]'>
                    <div className='flex justify-center '>
                        <Image
                            src="/logo.png"
                            alt='Logo'
                            width={1000}
                            height={1000}
                            className='w-[150px]'
                        />
                    </div>
                    <Nav/>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}

function Nav(){
  return(
      <div className="flex flex-row  justify-center max-w-[100%]">
        <Link href="/"><Button title="Home"/></Link>
        <Link href="/projects"><Button title="Projects"/></Link>
        <Link href="/blog"><Button title="Blog"/></Link>
        <Link href="/about"><Button title="About"/></Link>
      </div>
  );
}

function Button({title=""}){
  const def = "w-[15dvw] h-[4dvw] mx-[1em] text-[#3a3440] text-[3em] cursor-pointer rounded-[2dvw] font-bold bg-white";
  const active = "active:bg-black active:text-white"

  return (
    <button className={`${def} ${active}`}>{title}</button>
  );
}