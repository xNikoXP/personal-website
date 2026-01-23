import React from "react";

export default async function ListBlogPage({ params }: Readonly<{ params: { id: number } }>){

    
    let data = await fetch('http://localhost:8080/api/all');
    let allPosts = await data.json();
    let {id} = await params;

    const currentPage = Number(id) || 1;
    const pageSize = 5;
    const paginatedPosts = paginate(allPosts, currentPage, pageSize);


    return(
        <div>


            {
                paginatedPosts.map((post: { id: number; title: string}) => (
                    <div key={post.id} className="flex flex-col justify-center items-center py-[6dvh] mb-[1rem] border-y-3">
                        <a href={`/blog/${post.id}`} className="text-[4em] font-bold text-black hover:underline cursor-pointer">{post.title}</a>
                    </div>
                ))
            }


            <nav className="">
                <ul className="flex justify-center space-x-4 absolute bottom-10 w-[100%]">
                    {Array.from({ length: Math.ceil(allPosts.length / pageSize) }, (_,index) => (
                        <li key={index}>
                            <a
                                href={`/blog/list/${index + 1}`}
                                className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {index + 1}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            


        </div>
    );
}

export const paginate = (items: any, pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
}