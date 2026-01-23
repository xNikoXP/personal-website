import Image from 'next/image';
import Link from 'next/link';

export default async function Blog(){

   try{
    let data = await fetch('http://localhost:8080/api/all');
    let allPosts = await data.json();

    let latestPost = allPosts[Object.keys(allPosts).length - 1];
    let posts = allPosts.slice(0, Object.keys(allPosts).length - 1);

    return (
        <div>



            <h1 className='text-[15rem] text-center py-[2dvw] font-bold bg-[#3A283E] text-[#A699BD]'>Blog</h1>



            <div className='flex flex-row mt-[50px]'>



                <Link href={`/blog/${latestPost.id}`}><div className='w-[50dvw] flex flex-col justify-center items-center text-center'>

                    <h1 className='text-[3em] font-bold mb-[20px] cursor-pointer'>{latestPost.title}</h1>

                    <Image
                        src={`/blogpictures/${latestPost.coverImgPath}`}
                        alt="Blog Placeholder"
                        width={800}
                        height={600}
                        className="max-h-[50dvh] max-w-[80%]  w-[auto]"
                    />

                </div></Link>



                <div className='w-[50dvw] px-[5dvw] flex justify-left items-center text-xl leading-10'>



                    <ul className='list-disc'>
                        {
                            posts.map((post: { id: number; title: string}) => (
                                <Link key={post.id} href={`/blog/${post.id}`}><li className='mb-[10px] cursor-pointer text-blue-500 underline decoration-blue-500'>
                                    {post.title}
                                </li></Link>
                            ))
                        }
                    </ul>



                </div>
            </div>


            <div className='flex justify-center items-center mt-[10dvh] mb-[10dvh]'>
                <Link href={`/blog/list/${1}`}><button className='bg-blue-400 text-white font-bold h-[2rem] w-[6rem] rounded-[1rem] 
                transition duration-25 cursor-pointer active:bg-blue-900'>View All</button></Link>
            </div>



        </div>
    );
    } catch (error) {
        console.error('Error fetching blog posts:', error);

        return (
            <h1>Error loading blog posts. Please try again later.</h1>
        );
    }
}


