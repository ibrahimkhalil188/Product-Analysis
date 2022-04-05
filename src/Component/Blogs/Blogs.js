import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-2'>
            <div className='md:p-20 p-4'>
                <h1 className='text-3xl md:text-5xl text-cyan-600 font-bold my-6'>What is semantic tag?</h1>
                <p className='text-2xl'>Semantic means meaning full. In HTML5 semantic tag means meaning full tag for developer and web browser. before semantic tag developer write code like <span className='text-stash-600 font-bold'> div className='header-section'</span> though developer can understand but browser can't. instate of, HTML5 introduce <span className='text-stash-600 font-bold'> header , footer, article, aside</span> etc. those are meaning full tag anyone can understand which one header and footer.</p>
            </div>
            <div className='md:p-20 p-4'>
                <h1 className='text-3xl md:text-5xl text-cyan-600 font-bold my-6'>What is context API ?</h1>
                <p className='text-2xl p-2'>
                    We know that react pass data from parent to child using props. it's call props dealing. But sometime we pass data from grandparent to grandchild via props it's very annoying. that time context api help us providing a way to sent data grandparent to grandchild without sending every level of the tree. and i can use data here i need without pass manually.
                </p>
            </div>
            <div className='md:p-20 p-4'>
                <h1 className='text-3xl md:text-5xl text-cyan-600 font-bold my-6'>What is inline , block and inline-block element?</h1>
                <p className='text-2xl p-2'>
                    <span className='text-stash-600 font-bold' >Inline:</span> inline element take space as much as they need. and it don't break the line of content.
                </p>
                <p className='text-2xl p-2'>
                    <span className='text-stash-600 font-bold' >Block:</span> Block element take the hole space of line. and it break the line of content ans start from a new line. even a single word take the hole line.
                </p>
                <p className='text-2xl p-2'>
                    <span className='text-stash-600 font-bold' >Inline-Block:</span> Inline-Block are similar to inline element but we can set height and width.
                </p>
            </div>
        </div>
    );
};

export default Blogs;