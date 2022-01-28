import React from 'react';
import trash from '../img/trash.png';


const Posts = (props) => {

    const posts = props.posts;
    const setPost = props.setPost;

    function onDelete(id){
        setPost(posts.filter(post => post.id!==id));
    }


    return (
        <div className="flex flex-col items-center mt-24">
            {posts.map(element =>
                <div className="h-[200px] w-[400px] bg-gradient-to-r from-purple-400 to-orange-400 rounded-md mt-12" key={element.id}>
                    <p className="text-white ml-12 mt-8 text-lg">Name: {element.name}</p><p className="text-white ml-12 text-lg">Age: {element.age}</p>
                    <img src={trash} alt="trash" className="absolute h-6 hover:cursor-pointer mt-16 ml-[350px]" onClick={()=>onDelete(element.id)} />
                </div>)}
        </div>

    );
};

export default Posts;