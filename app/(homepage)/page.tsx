import Link from "next/link";

export default function Home() {
  return (
    <div className='flex justify-center bg-[url(/airplane.jpg)] bg-center bg-contain h-[76dvh] max-h-[100dvw]'>
      <div className="h-[100%] w-[100%] backdrop-blur-sm">
        <article className="flex flex-row h-[100%] justify-center items-center">

          <div className="h-[100%] w-[80%] flex flex-col justify-center items-center text-left text-white">

            <h1 className="text-[10rem] w-[80%] font-black"><span className="text-green-600">Living Life</span> Without A Map</h1>


            <div className="mt-[10em] mr-[5vw]">
              <Link href="/about"><button className="text-[2em] bg-blue-500 h-[4rem] w-[25rem] rounded-[12.5rem] font-bold cursor-pointer active:bg-blue-900">Click To Learn More</button></Link>
            </div>


          </div>

        </article>
      </div>
    </div>
  );
}
