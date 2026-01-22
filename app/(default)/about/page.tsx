import Image from 'next/image';

export default function About(){
    return(
        <div>


            <h1 className='text-[3rem] text-center py-[5dvw] font-bold bg-[#3A283E] text-[#A699BD]'>About Me</h1>


            <div className='flex flex-col justify-center items-center my-[5dvh] w-[100dvw]'>


                <div className='flex flex-col justify-center items-center w-[80%] text-left'>
                    <h2 className='text-[2em] font-bold'>Arvi Rivera</h2>
                    <p className='mt-[5dvh] w-[50%] text-[1em]'> &emsp; Hi, my name is Arvi. I am currently a student at Kean University. 
                        My hobbies include, collecting audio equipment, biking, and gaming. It is a pleasure to meet you. <br/> 
                        <br /> &emsp; Currently I am working on three projects. First, I am finishing this website. As you can see
                        the projects tab is currently a work in progress and I am making some design changes to the blog. <br/>
                        <br /> &emsp; Second project, I am working on is a news website called Journey's End focused on delivering geopolitical news.
                        The project is part of a wider project of making a media brand and currrently has an instagram for it. <br />
                        <br /> &emsp; Last project I am working on is one inspired by a youtube channel called Michael Reeves, where a device is worn 
                        that monitors your speech and if it determines your public speaking to be inadequate it tazes you. Once the 
                        project tab of this website is completed you will be able to see the progress there. </p>
                </div>


                <div className='mt-[10dvh] w-[80%] flex items-center justify-center'>
                    <img
                        src="/FormalPicture.PNG"
                        alt="Formal Picture"
                        className='h-[auto] w-[30dvw]' 
                    />
               </div>



            </div>
        </div>
    );
}