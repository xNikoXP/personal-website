import Image from 'next/image';

export default function About(){
    return(
        <div>


            <h1 className='text-[3rem] text-center py-[5dvw] font-bold bg-[#3A283E] text-[#A699BD]'>About Me</h1>


            <div className='flex flex-col justify-center items-center my-[5dvh] w-[100dvw]'>


                <div className='flex flex-col justify-center items-center w-[80%] text-left'>
                    <h2 className='text-[2em] font-bold'>Arvi Rivera</h2>
                    <p className='mt-[5dvh] w-[50%] text-[1em]'>Hi, my name is Arvi. I am currently a student at Kean University. 
                        My hobbies include, collecting audio equipment, biking, and gaming. It is a pleasure to meet you.</p>
                </div>


                <div className='mt-[10dvh] w-[80%] flex items-center justify-center'>
                    <img
                        src="/FormalPicture.png"
                        alt="Formal Picture"
                        className='h-[auto] w-[30dvw]' 
                    />
               </div>



            </div>
        </div>
    );
}