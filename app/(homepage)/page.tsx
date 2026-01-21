import Link from "next/link";

export default function Home() {
  return (
    <div className='flex justify-center bg-[url(/airplane.jpg)] bg-center bg-contain h-[76dvh]'>
      <div className="h-[100%] w-[100%] backdrop-blur-sm">
        <article className="flex flex-row h-[100%] w-[70dvw]">

          <div className="h-[100%] w-[80%] flex flex-col justify-center items-center text-left text-white">

            <h1 className="text-[3rem] max-w-[80%] font-black"><span className="text-green-600">Living Life</span> Without A Map</h1>


            <div className="mt-[10dvh] mr-[5vw]">
              <Link href="/about"><button className="text-[1em] bg-blue-500 h-[2rem] w-[10rem] rounded-[5rem] font-bold cursor-pointer active:bg-blue-900">Click To Learn More</button></Link>
            </div>


          </div>

        </article>
      </div>
    </div>
  );
}
