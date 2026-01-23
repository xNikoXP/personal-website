import Image from 'next/image';

export default function About(){
    return(
        <div>


            <h1 className='text-[12rem] text-center py-[5dvw] font-bold bg-[#3A283E] text-[#A699BD]'>About Me</h1>
            <h2 className='text-[6em] font-bold text-center my-[5rem]'>Arvi Rivera</h2>

            <div className='flex justify-center items-center  w-[100dvw]'>


                <div className='flex flex-col justify-center items-center w-[100%] text-left'>
                    
                    <p className='w-[75%] text-[3em]'> &emsp; Hi, my name is Arvi. I am currently a student at Kean University. 
                        My hobbies include, collecting audio equipment, biking, and gaming. It is a pleasure to meet you. <br/> 
                        <br /> &emsp; Currently I am working on three projects. First, I am finishing this website. As you can see
                        the projects tab is currently a work in progress and I am making some design changes to the blog. <br/>
                        <br /> &emsp; Second project, I am working on is a news website called Journey's End focused on delivering geopolitical news.
                        The project is part of a wider project of making a media brand and currrently has an instagram for it. <br />
                        <br /> &emsp; Last project I am working on is one inspired by a youtube channel called Michael Reeves, where a device is worn 
                        that monitors your speech and if it determines your public speaking to be inadequate it tazes you. Once the 
                        project tab of this website is completed you will be able to see the progress there. </p>
                </div>


                <div className='w-[80%] flex items-center justify-center'>
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