export default async function BlogPost({ params }: Readonly<{ params: Promise<{ id: string }> }>) {

    const { id } = await params;

    try{
        let data = await fetch(`http://localhost:8080/api/${id}`);
        let post = await data.json();

        return (
            <div className="flex flex-col ">
                <header className="bg-[#3A283E] text-[#A699BD] py-[4dvw] text-center shadow-[0_10px_50px_5px]">
                    <h1 className="text-[4em] font-bold pb-[2dvh]">{post.title}</h1>
                    <p className="text-[1em]">{post.dateTime}</p>
                </header>
                <div className="w-[70%] mt-[10dvh] self-center text-[1.5em] leading-[2.5em]">
                    <p>&emsp;{post.content}</p>
                </div>
            </div>
        );
    }
    catch (error) {
        console.error('Error fetching blog post:', error);
    }

    return (
        <h1>There are issues finding this post, please try again later</h1>
    )

}